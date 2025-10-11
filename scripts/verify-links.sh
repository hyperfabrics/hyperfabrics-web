#!/bin/bash

# This script checks for broken links by fetching the sitemap and testing each URL.

# --- Configuration ---
# The base URL of your local development server
BASE_URL="http://localhost:3000"
SITEMAP_URL="${BASE_URL}/sitemap.xml"
SUCCESS_COLOR='\033[0;32m'
ERROR_COLOR='\033[0;31m'
WARN_COLOR='\033[0;33m'
NC='\033[0m' # No Color

echo "Starting link verification for ${BASE_URL}..."
echo "Fetching sitemap from ${SITEMAP_URL}"
echo ""

# --- Fetch and Parse Sitemap ---
# Use curl to get the sitemap, then grep/sed to extract URLs.
URLS=$(curl -s "$SITEMAP_URL" | grep -o '<loc>[^<]*</loc>' | sed 's/<loc>//;s/<\/loc>//')

if [ -z "$URLS" ]; then
  echo -e "${ERROR_COLOR}Error: Could not fetch or parse sitemap.xml. Is the dev server running at ${BASE_URL}?${NC}"
  exit 1
fi

broken_links=0
total_links=0

# --- Loop Through URLs and Check Status ---
for url in $URLS; do
  total_links=$((total_links + 1))
  # Replace the production domain with localhost for local testing
  local_url=$(echo "$url" | sed "s|https://fazezero.com|${BASE_URL}|")
  
  # Get the HTTP status code
  status_code=$(curl -o /dev/null -s -w "%{http_code}" "$local_url")
  
  if [ "$status_code" -ge 200 ] && [ "$status_code" -lt 300 ]; then
    echo -e "[${SUCCESS_COLOR}  OK  ${NC}] ${status_code} - ${local_url}"
  elif [ "$status_code" -ge 300 ] && [ "$status_code" -lt 400 ]; then
    echo -e "[${WARN_COLOR}REDIR${NC}] ${status_code} - ${local_url}"
  else
    echo -e "[${ERROR_COLOR}BROKEN${NC}] ${status_code} - ${local_url}"
    broken_links=$((broken_links + 1))
  fi
done

# --- Summary ---
echo ""
echo "--------------------"
echo "Verification Complete"
echo "Total links checked: ${total_links}"

if [ "$broken_links" -eq 0 ]; then
  echo -e "${SUCCESS_COLOR}Success: No broken links found!${NC}"
  exit 0
else
  echo -e "${ERROR_COLOR}Found ${broken_links} broken link(s).${NC}"
  exit 1
fi
