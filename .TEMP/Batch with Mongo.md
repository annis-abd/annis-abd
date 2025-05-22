## phxJobMonitoring

| ฟิลด์ | ประเภทข้อมูล | รายละเอียด | คุณสมบัติพิเศษ |
|-------|------------|-----------|--------------|
| refId | String | รหัสอ้างอิง | |
| jobType | String | ประเภทของงาน | มีการทำ index |
| inputDetail | Object | รายละเอียดข้อมูลนำเข้า | |
| successDetail | Object | รายละเอียดการทำงานที่สำเร็จ | |
| failDetail | Object | รายละเอียดการทำงานที่ล้มเหลว | |
| status | String | สถานะของงาน | |
| created | Date | วันเวลาที่สร้างรายการ | |
| createdBy | String | ผู้สร้างรายการ ถ้าไม่มีใส่ myOffice | |
| lastModified | Date | วันเวลาที่แก้ไขล่าสุด | |
| lastModifiedBy | String | ผู้แก้ไขล่าสุด | |
| effectiveDate | Date | วันที่มีผล | |
| filename | String | ชื่อไฟล์ | |
| filetype | String | ประเภทไฟล์ | |
| listType | String | ประเภทรายการ | |
| topic | String | หัวข้อ | |
| flat | Number | ค่า flat (ไม่ระบุรายละเอียด) | |
| totalPhone | Number | จำนวนเบอร์โทรศัพท์ทั้งหมด | |
| goodPhone | Number | จำนวนเบอร์โทรศัพท์ที่ถูกต้อง | |
| totalLst | String | รายการทั้งหมด (ในรูปแบบข้อความ) | |
| error | String | ข้อความแสดงข้อผิดพลาด | |
| totalCount | Number | จำนวนรายการทั้งหมด | |
| errorCount | Number | จำนวนข้อผิดพลาด | |
| email | Object | ข้อมูลอีเมล | |
| progress | String | ความคืบหน้าของงาน | |


## phxJobNumberLucky

| ฟิลด์ | ประเภทข้อมูล | รายละเอียด | คุณสมบัติพิเศษ |
|-------|------------|-----------|--------------|
| refId | Object | รหัสอ้างอิง | มีการทำ index |
| mobileNo | String | หมายเลขโทรศัพท์มือถือ | |
| resultCode | String | รหัสผลลัพธ์ | |
| resultDesc | String | คำอธิบายผลลัพธ์ | |
| response | Object | ข้อมูลการตอบกลับ | |
| request | Object | ข้อมูลคำขอ | |
