## INVADM.BATCH_REQUEST

| คอลัมน์ | ประเภทข้อมูล | คำอธิบาย |
|---------|---------|---------|
| ROW_ID | VARCHAR | รหัส Primary key (เก็บค่า ULID) |
| CREATED | DATE | วันเวลาที่สร้างรายการ |
| CREATED_BY | VARCHAR | รหัสผู้ใช้ที่สร้างรายการ ถ้าไม่มีใส่ myOffice |
| LAST_UPDATE | DATE | วันเวลาที่อัปเดตล่าสุด |
| LAST_UPDATE_BY | VARCHAR | รหัสผู้ใช้ที่อัปเดตล่าสุด |
| REQUEST_NO | VARCHAR | เลขที่คำขอ (Format: MO-[subJob]-[YYYYMMDDHHmm]-[sequence]) |
| REQUEST_TYPE | VARCHAR | ประเภทคำขอ |
| REQUEST_STATUS | VARCHAR | สถานะคำขอ (ค่าเริ่มต้น: 'Open') |
| EMAIL_TO | VARCHAR | อีเมลผู้รับหลัก |
| EMAIL_CC | VARCHAR | อีเมลผู้รับสำเนา |
| EMAIL_FLG | VARCHAR | สถานะการส่งอีเมล (Y/N) |
| INPUT_FILE | VARCHAR | พาธของไฟล์นำเข้า |
| OUTPUT_SUCESS_FILE | VARCHAR | พาธของไฟล์ผลลัพธ์สำเร็จ |
| OUTPUT_ERR_FILE | VARCHAR | พาธของไฟล์ผลลัพธ์ผิดพลาด |
| COUNT_TOTAL | NUMBER | จำนวนรายการทั้งหมด |
| COUNT_SUCCESS | NUMBER | จำนวนรายการที่สำเร็จ |
| COUNT_FAILED | NUMBER | จำนวนรายการที่ล้มเหลว |
| APPROVE_MEMO | VARCHAR | บันทึกการอนุมัติ |
| OWNER_MEMO | VARCHAR | บันทึกของเจ้าของ |
| REMARK | VARCHAR | หมายเหตุ |
| PARAM1 | VARCHAR | พารามิเตอร์เพิ่มเติม 1 |
| PARAM2 | VARCHAR | พารามิเตอร์เพิ่มเติม 2 |
| PARAM3 | VARCHAR | พารามิเตอร์เพิ่มเติม 3 |
| PARAM4 | VARCHAR | พารามิเตอร์เพิ่มเติม 4 |
| PARAM5 | VARCHAR | พารามิเตอร์เพิ่มเติม 5 |
| RUN_DATE | VARCHAR | วันที่เริ่มทำงาน |


## INVADM.BATCH_REQUEST_DETAIL

| คอลัมน์ | ประเภทข้อมูล | คำอธิบาย |
|---------|---------|---------|
| ROW_ID | VARCHAR | รหัส Primary key (เก็บค่า ULID) |
| CREATED | DATE | วันเวลาที่สร้างรายการ |
| CREATED_BY | VARCHAR | รหัสผู้ใช้ที่สร้างรายการ |
| LAST_UPDATE | DATE | วันเวลาที่อัปเดตล่าสุด |
| LAST_UPDATE_BY | VARCHAR | รหัสผู้ใช้ที่อัปเดตล่าสุด |
| REQUEST_ROW_ID | VARCHAR | Foreign key อ้างอิงถึง ROW_ID ของตาราง BATCH_REQUEST |
| BATCH_SUB_REQUEST_ROW_ID | VARCHAR | รหัสคำขอย่อย (หากมี) |
| REQUEST_DETAIL_SEQUENCE | NUMBER | ลำดับของรายละเอียดคำขอ |
| REQUEST_DETAIL_STATUS | VARCHAR | สถานะของรายละเอียดคำขอ (ค่าเริ่มต้น: 'Open') |
| REQUEST_DETAIL_DATA | VARCHAR | ข้อมูลรายละเอียดคำขอ |
| RESULT_CODE | VARCHAR | รหัสผลลัพธ์ |
| RESULT_MESSAGE | VARCHAR | ข้อความผลลัพธ์ |


`* File Path: legacy-moapp\modules\shared\services\batch-request.service.js`