# MO Document

All MO documents.


## Contents 

- [Token](#token)
- [Mail](#mail)
- [Server](#server)
- [Database](#database)
- [API](#api)
- [Screen](#screen)
- [Deployment](#deployment)
- [Contact](#contact)


## Token

| KEY    | VALUE                               |
| ------ | ----------------------------------- |
| Decode | <https://jwt.io/>                   |
| Encode | <http://jwtbuilder.jamiekurtz.com/> |
| Key    | phx-inventory-jwt                   |
|        | HS256                               |


## Mail

| TITLE   | IOT                                     | PROD                        |
| ------- | --------------------------------------- | --------------------------- |
| MO Mail | <myoffice-informdev@corp.ais900dev.org> | <myoffice-inform@ais.co.th> |
| My Mail | <annisbd@corp.ais900dev.org>            | intsmtp.corp.ais900.org     |
| Pass    | @1s@Aug2022Dev                          |                             |
| Port    | 25                                      |                             |
| xxx     | <https://10.252.160.41/owa/>            |                             |
| xxx     | <https://nodemailer.com/about/>         |                             |


## Server

| ENV        | NAME            | HOST          | IP             | PASS          | ROOT      | REMARK        |
| ---------- | --------------- | ------------- | -------------- | ------------- | --------- | ------------- |
| PRODUCTION | App Online      | PNEWINVA801G  | 10.235.121.180 |               |           | 10.197.72.175 |
|            | App Prematch    | PNEWINVA802G  | 10.235.121.182 |               |           | 10.197.72.177 |
|            | App Batch       | PNEWINVA803G  | 10.233.53.84   |               |           | 10.197.79.87  |
|            | Web             | PNEWINVW801G  | 10.232.79.117  |               |           | 10.15.35.169  |
|            | Web             | PNEWINVW802G  | 10.232.79.147  |               |           | 10.15.35.200  |
|            | Database        | PNEWINVD801G  | 10.235.123.220 |               |           | 10.197.73.217 |
|            |
| DEVELOP    | MO App          | DNEWINVA001G  | 10.138.34.239  | MO-8pk7770cbtKB  | R3dh@t!@# |
|            | MO Web          | DNEWINVW001G  | 10.137.19.135  | MO-8pk7770cbtKB  | R3dh@t!@# |
|            | MO MongoDB      | DNEWINVD001G  | 10.138.21.224  | MO-8pk7770cbtKB  | R3dh@t!@# |
|            | S3 App          | DMYOPIA001G   | 10.138.21.222  | 1jZ_d8oX[O6wb8+  |
|            | S3 PostgresDB   | DMYOPIPGD001G | 10.138.21.223  | 1jZ_d8oX[O6wb8+  |
|            | S3 MongoDB      | DMYOPIMGD001G | 10.138.21.224  | 1jZ_d8oX[O6wb8+  |
|            | JBoss App       | DWPPJBA001G   | 10.138.38.59   | Ais@30Jul     | R4j0VEi&5 |
|            | JBoss PostgreDB | DWPPJBD001G   | 10.138.38.60   | Ais@30Jul     | R4j0VEi&5 |

| Log App  |           |
| -------- | --------- |
| username | servergst |
| password | w0U+8817h |


## Database

| OWNER     | VAR             | IOT (IP:PORT)       | IOT (SID)   | IOT (USER)   | IOT (PASS)   | PROD (IP:PORT)      | PROD (SID) | PROD (USER) | PROD (PASS)     |
| --------- | --------------- | ------------------- | ----------- | ------------ | ------------ | ------------------- | ---------- | ----------- | --------------- |
| INVMSTADM | SFFNUMBERMASTER | 172.16.249.77:1537  | INVSITDB    | invmst_usr   | inv#05mstusr | 172.16.252.26:1522  | invsffdb   | invmst_usr  | inv#05mstusr    |
| INVADM    | INVADM          | 172.16.249.77:1537  | INVSITDB    | inv_usr      | inv#05usr    | 172.16.252.26:1522  | invsffdb   | inv_usr     | inv#05usr       |
| SFFINVADM | SFFINVDB        | 172.16.249.77:1537  | INVSITDB    | unnchanc     | unnchanc     | 172.16.252.26:1522  | invsffdb   | VHLINVUSR   | apr20#inv       |
| SFFADM    | SFFDB           | 172.16.249.77:1536  | SFFSITDB    | unnchanc     | unnchanc     | 172.16.252.26:1521  | sffdb      | VHLUSR      | apr20#inv       |
| PREPAID   | PLUGINDB        | 172.16.249.243:1551 | TSTPPE2E    | unnchanc     | unnchanc     | 172.16.252.53:1521  | otcdb      | vhlplugin   | Vhl#2020pp      |
| BSSINVT   | NEWNMDB         | 172.16.249.9:1565   | NEWNMTST    | unnchanc     | unnchanc     | 172.16.252.228:1521 | newnmdb    | monmdbusr   | mo#2021#UsrMnDB |
| MO        | MONGODB         | 10.138.21.224:27037 | phx-inv-sit | phxinvStream | 6g2K2Mqo96   |


## API

| NAME | VARIABLE          | IOT                                     | SIT                          | PATH                                                       |
| ---- | ----------------- | --------------------------------------- | ---------------------------- | ---------------------------------------------------------- |
| PGZ  | PGZ_HOST_PORT     | <http://10.138.32.123:31016>            | <http://10.138.33.105:31016> | /Resources/v1/PGZInventory/synchronous/ServiceProvisioning |
| PHX  | PHXPP_HOST_PORT   | <http://10.138.46.101:18080>            | <http://10.138.46.101:20080> | /api/v1/fulFillment/productProvisioning                    |
| SFF  | SFF_HOST_PORT     | <http://10.252.64.152:8803>             | <http://10.252.64.153:6100>  | /SFFWebService/SFFService                                  |
| SDF  | SDF_HOST_PORT     | <http://10.138.32.216:9123>             | <http://10.138.33.78:9123>   | /v1/resources/resourceSpecification                        |
| NPG  | NPG_HOST_PORT     | <https://sit-npg-api.az.intra.ais:8443> |
| CMSE | CMSE_HOST_URL     | <http://10.252.174.73:5002>             |
| S3   | S3PORTAL_ENDPOINT | <http://10.138.21.222:8080>             |
| GSSO | GSSO_HOST_PORT    | <https://10.252.176.182:8000>           |
| SMTP | SMTPHOST          | <https://10.252.160.41:25>              |


## Screen

| NAME             | LINK                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| Change PASS      | <https://ovms-mmt.ais.co.th/osm/>                                                                |
| Check AWS        | <http://www.praditsoft.co.th/optimus_web/test-sim.html>                                          |
| DOC              | <https://nokhook.ais.co.th/KnowledgeCenter/Operations2013/PSM/Documents/Forms/AllItems.aspx>     |
| Rundesk IOT      | <https://rundeck-stg.intra.ais/rundeck/project/BSS_TRANSFORM/jobs>                               |
| Rundesk Prod     | <https://rundeck-prod.intra.ais/rundeck/project/BSS_TRANSFORM/jobs>                              |
| VMWare           | <https://10.137.27.22/tenant/CDP-Provider>                                                       |
|                  |
| Local            | <https://localhost:8443>                                                                         |
| IOT              | <https://myoffice-web.intra.ais:8443>                                                            |
| Prod             | <https://myoffice-portal.intra.ais:8443>                                                         |
|                  |
| Portal           | /phx-inventory/auth/signin-sff/phx-inventory/portal/portal-management?sffToken=                  |
| Admin all Around | /phx-inventory/auth/signin-sff/phx-inventory/admin/admin-all-around?sffToken=                    |
| Perso SIM        | /phx-inventory/auth/signin-sff/phx-inventory/cecilia/perso-sim?sffToken=                         |
| Inquiry SIM      | /phx-inventory/auth/signin-sff/phx-inventory/universe/inventory/sim/inquiry-sim/by-sim?sffToken= |
| Print Sticker    | /phx-inventory/auth/signin-sff/phx-inventory/inventory/print/print-sticker?sffToken=             |


## Deployment

1. Notify team
2. Create [WR](https://tts.intra.ais/)
3. Create [WI](https://github.com/annis-abd/annis-abd/tree/master/Document/Deploy)
5. Upload to ACTM
6. Upload to [NEXUS](https://repo1.matador.ais.co.th/#browse/welcome)
7. Notify ACTM

| WR                             |                                                               |
| ------------------------------ | ------------------------------------------------------------- |
| **Detail Activity**            |
| Activity Title                 | SP00.0.0 Deploy Phoenix New Inventory (VHL) on yyyymmdd       |
| Description                    | นำโปรแกรมขึ้นรอบ deploy production                              |
| System Group                   | BSS - Business Support System                                 |
| Activity Group                 | Deploy Application                                            |
| Activity Scope                 | New Service/Feature                                           |
| Region                         | Bangkok                                                       |
| Node                           | PNEWINVA801G                                                  |
|                                | PNEWINVA802G                                                  |
|                                | PNEWINVA803G                                                  |
|                                | PNEWINVW801G                                                  |
|                                | PNEWINVW802G                                                  |
| Application                    | myOffice                                                      |
| Component                      | New Inventory                                                 |
| **Time Activity**              |
| Start Date                     | dd-1/mm/yyyy 22.00                                            |
| End Date                       | dd/mm/yyyy 00.00                                              |
| Fallback                       | dd/mm/yyyy 00.00                                              |
| Contact Point                  | <thanakrk@ais.co.th>                                          |
| **Decision Risk**              |
| Likelihood of Unplanned outage | 2: System no error last 12 month                              |
| Impact of Unplanned outage     | 1: Minor                                                      |
| Worst Service Impact           | หากรันแอพไม่ขึ้น ให้กลับไปใช้ version ก่อนหน้านี้                      |                   
| *suggest                       |

| WI           |
| ------------ |
| WR00-000000  |
| SP00.0.0     |
| yyyymmdd     |
| dd-1/mm/yyyy |
| *rollback    |

| REPO        |                          |
| ----------- | ------------------------ |
| File        | conf-app-1.0.0-20250000  |
| Group ID    | conf-phx                 |
| Artifact ID | conf-app                 |
| Version     | 1.0.0-20250000           |
|             |
| File        | conf-web-1.0.0-20250000  |
| Group ID    | conf-phx                 |
| Artifact ID | conf-web                 |
| Version     | 1.0.0-20250000           |
|             |
| File        | phxinvapp-1.0.0-20250000 |
| Group ID    | app                      |
| Artifact ID | phxinvapp                |
| Version     | 1.0.0-20250000           |
|             |
| File        | phxinvweb-1.0.0-20250000 |
| Group ID    | web                      |
| Artifact ID | phxinvweb                |
| Version     | 1.0.0-20250000           |


## Contact

| TYPE             | NAME (EN)                | MAIL                           | NICKNAME | ROLE | MOBILE       | COMPANY   |
| ---------------- | ------------------------ | ------------------------------ | -------- | ---- | ------------ | --------- |
| Staff            | Unn Chanchaeng           | <unnchanc@ais.co.th>           | Unn      | SA   | 085-098-0969 | MIMO      |
| Staff            | Sureeporn Phajuang       | <sureepph@ais.co.th>           | Khom     | SA   | 097-924-0713 | MIMO      |
| Staff            | Annis Abdulhakim         | <annisabd@ais.co.th>           | Nis      | PA   | 095-040-0540 | MIMO      |
| Staff            | Supakorn Thanikphithak   | <supakoth@ais.co.th>           | Boom     | PA   | 081-424-7945 | MIMO      |
| Man month        | Nongnapat Bunpong        | <nongb571@epicc.postbox.in.th> | Nan      | SA   | 085-437-0646 | Epic      |
| Deliver base pay | Non Srithong             | <nonsr443@entro.postbox.in.th> | Non      | SA   | 063-021-6550 | Entronica |
| Deliver base pay | Nisarat Thiangda         | <nisat443@entro.postbox.in.th> | Beer     | SA   | 096-084-6589 | Entronica |
| Deliver base pay | Navarat Suttiwat         | <navas443@entro.postbox.in.th> | Hmai     | SA   | 090-982-2448 | Entronica |
| Deliver base pay | Nithid Soodngam          | <niths443@entro.postbox.in.th> | Thid     | PA   | 090-373-8420 | Entronica |
| Deliver base pay | Kotechasit Nilnont       | <koten443@entro.postbox.in.th> | Fiw      | PA   | 097-014-7770 | Entronica |
| Deliver base pay | Jiratchakhit Tanyasrirat | <jirat443@entro.postbox.in.th> | Ham      | PA   | 085-266-1892 | Entronica |
| Deliver base pay | Nattika Khunarup         | <nattk443@entro.postbox.in.th> | Kat      | QA   | 061-526-5615 | Entronica |
| Deliver base pay | Suwatjanee Meejaiyen     | <suwam443@entro.postbox.in.th> | Eve      | QA   | 089-287-4138 | Entronica |
| Deliver base pay | Podjanee Greeintong      | <podjg443@entro.postbox.in.th> | Numkhing | QA   | 096-656-7266 | Entronica |
| Deliver base pay | Sahatsawat Saelueang     | <sahas443@entro.postbox.in.th> | Arm      | QA   | 064-941-2290 | Entronica |
| Deliver base pay | Nattapon vichutaves      | <nattv443@entro.postbox.in.th> | Nut      | QA   | 087-542-9288 | Entronica |
