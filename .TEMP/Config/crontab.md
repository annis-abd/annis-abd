# Crontab

List of all crontabs on production.


## PNEWINVA801G

- 00 08 * * * /home/phxinvapp/script/manage_app_log.sh
- 59 23 * * * /app/phxinvapp/crontab/splitLog.sh


## PNEWINVA802G

- 00 08 * * * /home/phxinvapp/script/manage_app_log.sh
- 59 23 * * * /app/phxinvapp/crontab/splitLog.sh


## PNEWINVA 803G

- 00 08 * * * /home/phxinvapp/script/manage_app_log.sh
- 59 23 * * * /app/phxinvapp/crontab/splitLog.sh
- 0 2 * * * /app/phxinvapp/crontab/removeESIMSale.sh
- 35 2 * * * /app/phxinvapp/crontab/loadPartialNumber.sh
- */15 * * * * curl -s -X POST "http://localhost:8889/src/unload-mobile/unloadByPrefixAndMobile"
- 30 4 * * * curl -s -X POST "http://localhost:8889/src/ncp-croissant/clear-expire-number-pps"
- */15 * * * * curl -s -X POST "http://localhost:8889/src/number/number-lucky/job-by-file"
- 0 4 * * * curl -s -X POST "http://localhost:8889/src/esim/sync-status"
- 30 2 * * * curl -s -X GET "http://localhost:8889/src/reconcile-number/reconcileMobile"
- 0 5 * * * curl -s -X POST "http://localhost:8889/src/auto-clear/working-history"
- 15 2 * * * curl -s -X GET "http://localhost:8889/src/number-return/start"
- 0 6 * * * curl -s -X POST "http://localhost:8889/src/number/pooling-number"
- 30 1 1 * * curl -s -X POST "http://localhost:8889/src/number/reset-quota-change"
- 0 1 * * * curl -s -X POST "http://localhost:8889/src/number/remove-number"
