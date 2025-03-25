'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
    port: process.env.PORT || 8443,
    // Binding to 127.0.0.1 is safer in production.
    host: process.env.HOST || '0.0.0.0',

    jwtSecret: process.env.JWT_SECRET || 'phx-inventory-jwt',
    jwtRequired: false,

    PHXBE: {
        url: process.env.PHXBE_HOST_PORT,
        readTimeout: process.env.PHXBE_TIME_OUT
    },

    NPG: {
        url: process.env.NPG_HOST_PORT,
        username: process.env.NPG_USERNAME,
        timeout: process.env.NPG_TIMEOUT,
        pathPortedMasters: process.env.NPG_PATH_PORTED_MASTERS,
        pathBroadcasts: process.env.NPG_PATH_BROADCASTS,
        pathAssignPrefixes: process.env.NPG_PATH_ASSIGN_PREFIXES
    },
    NPGPORTOUT: {
        url: process.env.NPGPORTOUT_HOST_PORT,
        path: process.env.NPGPORTOUT_PATH,
    },
    PGZ: {
        url: process.env.PGZ_HOST_PORT,
        readTimeout: process.env.PGZ_TIME_OUT,
        path: process.env.PGZ_PATH,
    },
    PGZMVPN: {
        url: process.env.PGZMVPN_HOST_PORT,
        path: process.env.PGZMVPN_PATH,
    },
    PGZMVPN_ACTION: {
        url: process.env.PGZMVPN_ACTION_HOST_PORT,
        path: process.env.PGZMVPN_ACTION_PATH,
    },
    ZTR: {
        url: process.env.ZTR_HOST_PORT,
        readTimeout: process.env.ZTR_TIME_OUT,
        path: process.env.ZTR_PATH,
        pathASP: process.env.ZTR_PATH_ASP,
        pathSSP: process.env.ZTR_PATH_SSP
    },
    SDF: {
        url: process.env.SDF_HOST_PORT,
        readTimeout: process.env.SDF_TIME_OUT,
        path: process.env.SDF_PATH,
        pathVIS: process.env.SDF_PATH_VIS,
        pathCUL: process.env.SDF_PATH_CUL,
        pathSequence: process.env.SDF_PATH_SEQUENCE,
        pathCommonSequence: process.env.SDF_PATH_COMMON_SEQUENCE,
        pathCheckSimTypeTraveler: process.env.SDF_PATH_CHECK_SIME_TYPE_TRAVELER,
        pathPackageTypeMasterPrep: process.env.SDF_PATH_PACKAGE_TYPE_MASTER_PREP,
        pathPreparation: process.env.SDF_PATH_PREPARATION,
        pathStickers: process.env.SDF_PATH_STICKERS,
        pathResource: process.env.SDF_PATH_RESOURCE,
        pathDeletePublic: process.env.SDF_PATH_DELETE_PUBLIC,
        pathDeleteSubscriber: process.env.SDF_PATH_DELETE_SUBSCRIBER,
        pathListOfValues: process.env.SDF_PATH_LIST_OF_VALUES,
        pathNumberPland: process.env.SDF_PATH_NUMBER_PLAND,
        pathPrefixNumber: process.env.SDF_PATH_PREFIX_NUMBER,
        pathPortOut:process.env.SDF_PATH_PORT_OUT,
        pathLang:process.env.SDF_LANG_PATH
    },
    PHXPP: {
        url: process.env.PHXPP_HOST_PORT,
        readTimeout: process.env.PHXPP_TIME_OUT,
        path: process.env.PHXPP_PATH,
        pathProvisioning: process.env.PHXPP_PATH_CONFIRM_PERSO,
        pathSim: process.env.PHXPP_PATH_SIM,
        pathPro: process.env.PHXPP_PATH_PRO,
        pathMoni: process.env.PHXPP_PATH_MONI,
        pathCheckPerso: process.env.PHXPP_PATH_CHECK_PERSO,
        pathConfirmPerso: process.env.PHXPP_PATH_CONFIRM_PERSO,
        path100Mins: process.env.PHX_PATH_BATCH,
        pathCreateCA: process.env.PHX_PATH_NEW_CA,
        pathPortOut: process.env.PHX_PATH_PORT_OUT,
        pathFreePack: process.env.PHXPP_PATH_FREE_PACK,
        pathPortOutOrderId: process.env.PHX_PATH_PORT_OUT_ORDER_ID
    },
    SFF: {
        url: process.env.SFF_HOST_PORT,
        path: process.env.SFF_PATH
    },
    SFFDB: {
        username: process.env.SFF_SFFDB_USERNAME,
        password: process.env.SFF_SFFDB_PASSWORD,
        connetionString: process.env.SFF_SFFDB_CONNECTION
    },
    SFFINVDB: {
        username: process.env.SFF_SFFINVDB_USERNAME,
        password: process.env.SFF_SFFINVDB_PASSWORD,
        connetionString: process.env.SFF_SFFINVDB_CONNECTION
    },
    PLUGINDB: {
        username: process.env.SFF_PLUGINDB_USERNAME,
        password: process.env.SFF_PLUGINDB_PASSWORD,
        connetionString: process.env.SFF_PLUGINDB_CONNECTION
    },
    PERSO: {
        pathKey: process.env.PATH_KEY,
        fileName: process.env.FILE_NAME
    },
    REPI: {
        pathPicture: process.env.PATH_PICTURE_PI
    },
    PATHNAS: {
        changeOffering: process.env.CHANGE_OFFERING_PATH,
        recall: process.env.RECALL_PATH,
        portIn: process.env.PORTIN_PATH,
        assignNumberNOCP: process.env.ASSIGN_NUMBER_NOCP_PATH,
        unassignNumberNOCP: process.env.UNASSIGN_NUMBER_NOCP_PATH,
        portInRekey: process.env.PORTIN_REKEY_PATH,
        syncChannelCCSM: process.env.SYNC_CHANNEL_CCSM_PATH,
        suspend: process.env.SUSPEND_PATH,
        reconnect: process.env.RECONNECT_PATH,
        recall: process.env.RECALL_PATH,
        portIn: process.env.PORTIN_PATH,
        wppCustomer: process.env.WPP_CUSTOMER,
        wppFilePI: process.env.WPP_FILE_PI,
        changeOfferingSP: process.env.CHANGE_OFFERING_SP_PATH,
        wppPrematch: process.env.WPP_PREMATCH,
        appproveLimitMobile: process.env.APPROVE_LIMIT_MOBILE_PATH,
        suspend: process.env.SUSPEND_PATH,
        reconnect: process.env.RECONNECT_PATH,
        changeOfferingSP: process.env.CHANGE_OFFERING_SP_PATH,
        /* wppOutFileSAPPath: process.env.WPP_OUT_FILE_SAP_PATH, */
        /* wppFgTargatPath: process.env.WPP_FG_TARGAT_PATH, */
        /* wppRawTargatPath: process.env.WPP_RAW_TARGAT_PATH, */
        wppPrepaidIdenImages: process.env.WPP_PREPAID_IDEN_IMAGES,
        changeProPI: process.env.CHANGEPRO_PI_PATH,
        batchPostpaidPath: process.env.BATCH_POST_PAID_PATH,
        pathMoveFileSFF: process.env.PATH_MOVE_FILE_SFF,
        pathSumHK: process.env.PATH_SUM_HK,
        /* wppRawOutputPath: process.env.WPP_RAW_OUT_PATH, */
        /* wppRawArchivePath: process.env.WPP_RAW_ARCHIVE_PATH, */
        /* wppFgOutputPath: process.env.WPP_FG_OUT_PATH, */
        wppFgArchivePath: process.env.WPP_FG_ARCHIVE_PATH,
        pi: process.env.PI_PATH,
        repi: process.env.REPI_PATH,
        portalPI: process.env.PORTAL_PI_PATH,
        portalRePI: process.env.PORTAL_RE_PI_PATH,
        portalPortIn: process.env.PORTAL_PORT_IN_PATH,
        portalRecallAndPI: process.env.PORTAL_RECALL_AND_PI_PATH,
        numberAdminExportAll: process.env.PATH_ARCHIVING_EXPORT_ALL,
        pathMoveFileSFFDisconnect: process.env.PATH_MOVE_FILE_SFF_DISCONNECT,
        pathSumHKDisconnect: process.env.PATH_SUM_HK_DISCONNECT,
        pathMoveFileSFFReconnect: process.env.PATH_MOVE_FILE_SFF_RECONNECT,
        pathSumHKReconnect: process.env.PATH_SUM_HK_RECONNECT,
        pathMoveFileSFFChangePromotion: process.env.PATH_MOVE_FILE_SFF_CHANGE_PROMOTION,
        pathSumHKChangePromotion: process.env.PATH_SUM_HK_CHANGE_PROMOTION,
        pathMoveFileSFFChangePromoUrgent: process.env.PATH_MOVE_FILE_SFF_CHANGE_PROMO_URGENT,
        pathSumHKChangePromoUrgent: process.env.PATH_SUM_HK_CHANGE_PROMO_URGENT,
        pathMoveFileSFFChangeService: process.env.PATH_MOVE_FILE_SFF_CHANGE_SERVICE,
        pathSumHKChangeService: process.env.PATH_SUM_HK_CHANGE_SERVICE,
        pathMoveFileSFFChangeSIM: process.env.PATH_MOVE_FILE_SFF_CHANGE_SIM,
        pathSumHKChangeSIM: process.env.PATH_SUM_HK_CHANGE_SIM,
        pathMoveFileSFFChangeProductPostPaid: process.env.PATH_MOVE_FILE_SFF_CHANGE_PRODUCT_POSTPAID,
        pathSumHKChangeProductPostPaid: process.env.PATH_SUM_HK_CHANGE_PRODUCT_POSTPAID,
        pathMoveFileSFFChangePromotionCampaign: process.env.PATH_MOVE_FILE_SFF_CHANGE_PROMO_CAMPAIGN,
        pathSumHKChangePromotionCampaign: process.env.PATH_SUM_HK_CHANGE_PROMO_CAMPAIGN,
        pathMoveFileSFFChangeServiceCampaign: process.env.PATH_MOVE_FILE_SFF_CHANGE_SERVICE_CAMPAIGN,
        pathSumHKChangeServiceCampaign: process.env.PATH_SUM_HK_CHANGE_SERVICE_CAMPAIGN,
        mergePicture: process.env.MERGE_PICTURE,
        adjustment: process.env.ADJUSTMENT_INCREASE_PATH,
        emergency: process.env.EMERGENCY_AIRTIME_PATH,
        notifyREPI: process.env.NOTIFY_REPI_PATH,
        clearProfilePI: process.env.CLEAR_PROFILE_PI,
        autoPI: process.env.AUTO_PI_PATH,
        autoPIInvoice: process.env.AUTO_PI_INVOICE,
        adjustmentUrgent: process.env.ADJUSTMENT_URGENT_PATH,
        changeMainSIM: process.env.CHANGE_MAIN_SIM_PATH,
        cancelPortIn: process.env.CANCEL_PORT_IN_PATH,
        changeMultiSim: process.env.CHANGE_MULTI_SIM_PATH,
        changeSpareSim: process.env.CHANGE_SPARE_SIM_PATH,
        cancelChangeMainSim: process.env.CANCEL_CHANGE_MAIN_SIM_PATH,
        loadSimService: process.env.LOAD_SIM_SERVICE,
        pathMoveFileSFFChangeOwner: process.env.PATH_MOVE_FILE_SFF_CHANGE_OWNER,
        pathSumHKChangeOwner:  process.env.PATH_SUM_HK_CHANGE_OWNER,
        pathMoveFileSFDisconnectTerminate: process.env.PATH_MOVE_FILE_SFF_DISCONNECT_TERMINATE,
        pathSumHKDisconnectTerminate: process.env.PATH_SUM_HK_DISCONNECT_TERMINATE,
        pathMoveFileSFFSuspendFraud: process.env.PATH_MOVE_FILE_SFF_SUSPEND_FRAUD,
        pathSumHKSuspendFraud: process.env.PATH_SUM_HK_SUSPEND_FRAUD,
        pathMoveFileSFFReconnectFraud: process.env.PATH_MOVE_FILE_SFF_RECONNECT_FRAUD,
        pathSumHKReconnectFraud: process.env.PATH_SUM_HK_RECONNECT_FRAUD,
        pathMoveFileSFFChangeMobileNumber: process.env.PATH_MOVE_FILE_SFF_CHANGE_MOBILE_NUMBER,
        pathSumHKChangeMobileNumber: process.env.PATH_SUM_HK_CHANGE_MOBILE_NUMBER,
        pathMoveFileSFFChangeChargeType: process.env.PATH_MOVE_FILE_SFF_CHANGE_CHARGE_TYPE,
        pathSumHKChangeChargeType:process.env.PATH_SUM_HK_CHANGE_CHARGE_TYPE,

    },
    SSB: {
        urlPI: process.env.SSB_HOST_PORT_PI,
        urlREPI: process.env.SSB_HOST_PORT_REPI,
        pathPI: process.env.SSB_PATH_PI,
        pathREPI: process.env.SSB_PATH_REPI
    },
    db: {
        uri: process.env.MONGOHQ_URL,
        options: {
            user: process.env.MONGO_USERNAME,
            pass: process.env.MONGO_PASSWORD,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            // useMongoClient: true,
            // reconnectTries: 10,
            // reconnectInterval: 1000
        },
        debug: process.env.MONGODB_DEBUG || false
    },
    log: {
        level: 'info',
        logInfoPath: process.env.LOG_INFO_PATH,
        logIncomimgPath: process.env.LOG_INCOMING_PATH,
        logServicePath: process.env.LOG_SERVICE_PATH,
        logServerPath: process.env.LOG_SERVER_PATH,
        logMonitorServicePath: process.env.LOG_MONITOR_SERVICE_PATH

    },
    AUTHORIZE: {
        password: process.env.AUTHORIZE_PASSWORD
    },
    APPID: {
        appId: process.env.APPID
    },
    ADMD: {
        url: process.env.ADMD_HOST_PORT,
        timeout: process.env.ADMD_TIMEOUT,
        msTeam: process.env.ADMD_NOTIFICATION_MSTEAM,
        /* REMOVE LINE NOTIFICATION
        line: process.env.ADMD_NOTIFICATION_LINE,
        lineToken: process.env.ADMD_NOTIFICATION_LINE_TOKEN, */
        msTeamPrettyNo: process.env.ADMD_NOTIFICATION_MSTEAM_PRETTY,
        msTeamMobileReuse: process.env.ADMD_MSTEAM_MOBILEREUSE,
        msTeamActivityBatchPostpaid: process.env.ADMD_MSTEAM_BATCH_MONITOR,
        msTeamActivityJobCopyFileSAP: process.env.ADMD_MSTEAM_JOB_COPY_FILE_SAP_MONITOR,
        msTeamNumberAdminExportAll: process.env.ADMD_MSTEAM_NUMBER_ADMIN_EXPORT_ALL,
        msTeamActivityBatchMonitorDisconnect: process.env.ADMD_MSTEAM_BATCH_MONITOR_DISCONNECT,
        msTeamBatcgSyncMaterial: process.env.ADMD_MSTEAM_BATCH_SYNC_MATERIAL,
        msTeamMonitoring: process.env.ADMD_MSTEAM_MONITORING
    },
    GSSO: {
        url: process.env.GSSO_HOST_PORT,
        sendOTPCommand: process.env.GSSO_SEND_OTP,
        confirmOTPCommand: process.env.GSSO_CONFIRM_OTP
    },
    assignNumberNOCP: {
        time: process.env.ASSIGN_NUMBER_NOCP_TIME,
        node: process.env.ASSIGN_NUMBER_NOCP_NODE,
        port: process.env.ASSIGN_NUMBER_NOCP_PORT,
        path: process.env.ASSIGN_NUMBER_NOCP_PATHIP,
    },

    numberMasterCron: {
        time: process.env.NUMBER_MASTER_TIME,
        node: process.env.NUMBER_MASTER_NODE,
    },
    channelCCSMCron: {
        time: process.env.CHANNEL_CCSM_TIME,
        node: process.env.CHANNEL_CCSM_NODE,
        path: process.env.CHANNEL_CCSM_PATH,
    },
    unassignNOCPCron: {
        time: process.env.UNASSIGN_NOCP_TIME,
        node: process.env.UNASSIGN_NOCP_NODE,
        port: process.env.UNASSIGN_NUMBER_NOCP_PORT,
        path: process.env.UNASSIGN_NUMBER_NOCP_PATHIP,
    },

    /* wppMasterOfProductLoadSAPCron: {
        time: process.env.WPP_LOAD_SAP_TIME,
        node: process.env.WPP_LOAD_SAP_NODE,
        path: process.env.WPP_LOAD_SAP_PATH,
        port: process.env.WPP_LOAD_SAP_PORT,
    }, */

    /* wppMatRawSyncSAPCron: {
        time: process.env.WPP_SYNC_MAT_RAW_TIME,
        node: process.env.WPP_SYNC_MAT_RAW_NODE,
        port: process.env.WPP_SYNC_MAT_RAW_PORT,
    }, */

    /* wppMatFGSyncSAPCron: {
        time: process.env.WPP_SYNC_MAT_FG_TIME,
        node: process.env.WPP_SYNC_MAT_FG_NODE,
        port: process.env.WPP_SYNC_MAT_FG_PORT,
    }, */

    POSTGRESQL: {
        connectionString: process.env.PGCONNECTIONSTRING,
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABSE,
        port: process.env.PGPORT,
        poolMAX: process.env.PGPOOLMAX,
        IDLETIMEOUT: process.env.PGIDLETIMEOUT,
        CONNECTIONTIMEOUT: process.env.CONNECTIONTIMEOUT
    },
    SMTP: {
        hostURL: process.env.SMTPHOST,
        port: process.env.SMTPPORT || 587,
        username: process.env.SMTPEMAIL,
        password: process.env.SMTPPASSWORD
    },
    removeEsimCron: {
        time: process.env.REMOVE_ESIM_TIME,
        node: process.env.REMOVE_ESIM_NODE,
        path: process.env.REMOVE_ESIM_PATH
    },
    locationSFFCron: {
        time: process.env.LOCATION_SFF_TIME,
        node: process.env.LOCATION_SFF_NODE,
    },

    NEWNMDB: {
        username: process.env.PS_NEWNMDB_USERNAME,
        password: process.env.PS_NEWNMDB_PASSWORD,
        connetionString: process.env.PS_NEWNMDB_CONNECTION
    },

    /* reconcileNumber: {
        tmpPath: process.env.RECONCILE_NUMBER_TMP_PATH,
        nasPath: process.env.RECONCILE_NUMBER_NAS_PATH
    }, */

    NASPORTAL: {
        pathApproveLimitMobile: process.env.PATH_APPROVE_LIMIT_MOBILE,
        pathPrepaidIden: process.env.PATH_PREPAID_IDEN,
        pathChangeProPI: process.env.PATH_CHANGEPRO_PI,
        pathBatchPI: process.env.PATH_BATCH_PI,
        pathBatchRePI: process.env.PATH_BATCH_RE_PI,
        pathBatchPortIn: process.env.PATH_BATCH_PORT_IN,
        pathBatchRecallAndPI: process.env.PATH_BATCH_RECALL_AND_PI,
    },

    WPPAPP: {
        timeout: process.env.WPPAPP_TIME_OUT,
        hostURL: process.env.WPPAPP_HOST_URL,
        sap001F: process.env.WPPAPP_SAP001F,
        sapZSDCS002: process.env.WPPAPP_SAPZSDCS002
    },
    CMSE: {
        hostURL: process.env.CMSE_HOST_URL,
        pathGoodReceive: process.env.CMSE_PATH_GOOD_RECEIVE
    },
    SUBDLDB: {
        username: process.env.SUBDL_USERNAME,
        password: process.env.SUBDL_PASSWORD,
        connetionString: process.env.SUBDL_CONNECTION
    },
    JBOSS: {
        limitParallel: process.env.JBOSS_LIMIT_PARALLEL || 100,
        url: process.env.JBOSS_HOST_PORT,

        pathGetInquiryActivateEpin: process.env.JBOSS_PATH_GET_INQUIRY_ACTIVATE_EPIN,
        pathPostConfirmActivateEpin: process.env.JBOSS_PATH_POST_CONFIRM_ACTIVATE_EPIN,
        pathPostReActivateEpin: process.env.JBOSS_PATH_POST_RE_CONFIRM_ACTIVATE_EPIN,
        pathPostLoadSerial: process.env.JBOSS_PATH_POST_LOAD_SERIAL,

        pathPostInquiryAct: process.env.JBOSS_PATH_POST_INQUIRY_ACT,
        pathPostInquiryDeactBatch: process.env.JBOSS_PATH_POST_INQUIRY_DEACT_BATCH,
        pathPostConfirmAct: process.env.JBOSS_PATH_POST_COMFIRM_ACT,
        pathPostReConfirmAct: process.env.JBOSS_PATH_POST_RE_COMFIRM_ACT,
        pathPostConfirmDeactBatch: process.env.JBOSS_PATH_POST_CONFIRM_DEACT_BATCH,
        pathPostReConfirmDeactBatch: process.env.JBOSS_PATH_POST_RE_COMFIRM_DEACT_BATCH,

        pathPostInquiryDeactSerial: process.env.JBOSS_PATH_POST_INQUIRY_DEACT_SERIAL,
        pathPostConfirmDeactSerial: process.env.JBOSS_PATH_POST_CONFIRM_DEACT_SERIAL,
        pathPostReConfirmDeactSerial: process.env.JBOSS_PATH_POST_RE_CONFIRM_DEACT_SERIAL,

        pathGETInquiryProgresss: process.env.JBOSS_PATH_GET_INQUIRY_PROGRESS,

        pathPUTReceiveSapCashCard: process.env.JBOSS_PATH_PUT_RECEIVE_SAP_CASH_CARD,
        pathPOSTConfirmLoad: process.env.JBOSS_PATH_POST_CONFIRM_LOAD,
        pathPOSTConfirmUnload: process.env.JBOSS_PATH_POST_CONFIRM_UNLOAD,
        pathPOSTinquiryLoadSerial: process.env.JBOSS_PATH_POST_INQUIRY_LOAD_SERIAL,
        pathGETInquiryCashStock: process.env.JBOSS_PATH_GET_INQUIRY_CASH_STOCK,

        pathPOSTInquiryCashSerialNo: process.env.JBOSS_PATH_POST_INQUIRY_CASH_SERIAL_NO,
        pathGETInquiryCashBatch: process.env.JBOSS_PATH_GET_INQUIRY_CASH_BATCH,
        pathGETInquiryCashSerial: process.env.JBOSS_PATH_GET_INQUIRY_CASH_SERIAL,

        pathPostForceActivateEpin: process.env.JBOSS_PATH_POST_FORCE_CONFIRM_ACTIVATE_EPIN,
        pathPostForceConfirmDeactBatch: process.env.JBOSS_PATH_POST_FORCE_COMFIRM_DEACT_BATCH,
        pathPostForceConfirmDeactSerial: process.env.JBOSS_PATH_POST_FORCE_CONFIRM_DEACT_SERIAL,
        pathPostForceConfirmAct: process.env.JBOSS_PATH_POST_FORCE_COMFIRM_ACT
    },
    SCC_WPP: {

        getLOVschedule: process.env.GET_LOV_SCHEDULE,
        getLOVflag: process.env.GET_LOV_FLAG || false,

        appName: process.env.APP_NAME
    },

    S3Portal: {
        url: process.env.S3PORTAL_ENDPOINT,
        pathGetImageS3: process.env.S3PORTAL_PATH_GET_IMAGE,
        pathPostUploadBucket: process.env.S3PORTAL_PATH_POST_UPLOAD_BUCKET
    },
    inquirySimCron: {
        nasPath: process.env.INQUIRY_SIM_NASPATH,
    },

    SFFNUMBERMASTER: {
        username: process.env.SFF_SFFNUMBERMASTER_USERNAME,
        password: process.env.SFF_SFFNUMBERMASTER_PASSWORD,
        connetionString: process.env.SFF_SFFNUMBERMASTER_CONNECTION,
        msTeamAlertActivityUpdate: process.env.MS_TEAM_ALERT_ACTIVITY_UPDATE,
        linkDownloadExcel: process.env.LINK_DONWLOAD_EXCEL,
        pgzUrl: process.env.URL_PGZ_MIGRATE,
        pathMigrate: process.env.PATH_PGZ_MIGRATE
    },
    wppSyncUsageTypeBySerialCron: {
        time: process.env.WPP_SYNC_USAGE_TYPE_TIME,
        node: process.env.WPP_SYNC_USAGE_TYPE_NODE,
        path: process.env.WPP_SYNC_USAGE_TYPE_PATH,
        port: process.env.WPP_SYNC_USAGE_TYPE_PORT,
    },
    ATN: {
        url: process.env.ATN_HOST_PORT,
    },
    INVADM: {
        username: process.env.ORACLE_INVADM_USERNAME,
        password: process.env.ORACLE_INVADM_PASSWORD,
        connetionString: process.env.ORACLE_INVADM_CONNECTION
    },
    PHXInvSAP: {
        url: process.env.PHX_INV_SAP_HOST_PORT,
        username: process.env.PHX_INV_SAP_USERNAME,
        password: process.env.PHX_INV_SAP_PASSWORD,
        pathRESTAdapter: process.env.PHX_INV_SAP_PATH_REST_ADAPTER,
        funcZSDCS002: process.env.PHX_INV_SAP_PATH_FUCN_ZSDCS002,
    },
    NASMO: {
        pathNasMO: process.env.PATH_NAS_MO,
    },
    PGZ_INQUIRY: {
        url: process.env.PGZ_INQUIRY_HOST_PORT,
        path: process.env.PGZ_INQUIRY_PATH,
    },
    NASSHARE: {
        phxDynamicSimPost: process.env.PHX_DYNAMIC_SIM_POST,
        phxDynamicSimPre: process.env.PHX_DYNAMIC_SIM_PRE,
    },
    SDF_PORTOUTOVERWRITE: {
        url: process.env.SDF_PORTOUTOVERWRITE_HOST_PORT,
        pathPortOutPPreValidations: process.env.SDF_PORTOUT_PPREVALIDATIONS__PATH,
        pathPortOutRequests: process.env.SDF_PORTOUT_REQUESTS_PATH,
    },
    PHXP_PORTOUTOVERWRITE: {
        path: process.env.PHX_PATH_PORT_OUT_OVER_WRITE,
    },
    CQS_PREPAID: {
        url: process.env.CQS_PREPAID_HOST_PORT,
        path: process.env.CQS_PREPAID_PATH,
    },
    CQS_POSTPAID: {
        url: process.env.CQS_POSTPAID_HOST_PORT,
        path: process.env.CQS_POSTPAID_PATH,
    },
    MYIM: {
        url: process.env.MYIM_LIST_MY_CASES_HOST_PORT,
        pathListMyCases: process.env.MYIM_LIST_MY_CASES_PATH,
    },
    PGZ_INV: {  
        url: process.env.PGZ_INV_HOST_PORT,
        path: process.env.PGZ_INV_PATH,
    }, 
    BATHCH_LOAD_SIM: {
        input: process.env.BATHCH_LOAD_SIM_INPUT_FILE,
        output: process.env.BATHCH_LOAD_SIM_OUTPUT_FILE,
    },
    BATHCH_UNLOAD_SIM: {
        input: process.env.BATHCH_UNLOAD_SIM_INPUT_FILE,
        output:  process.env.BATHCH_UNLOAD_SIM_OUTPUT_FILE,
    },

    CCSM: {
        url: process.env.CCSM_HOST_PORT,
        pathChannelASCProfile: process.env.CCSM_PATH_CHANNEL_ASC_PROFILE,
    }
}