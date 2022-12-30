use ve_xe_exam;
insert into nha_xe
values(1, 'Phương Trang'),
(2, 'Trung Nguyên'),
(3, 'Trung Tính');

insert into ve_xe 
values
(1,'Đà Nẵng', 'Nha Trang', '200000','12:00','2022-12-12','5',true,1),
 (2,'Đà Nẵng', 'Huế', '200000','12:00','2022-12-12','5',true,1),
 (3,'Đà Nẵng', 'Nhật', '200000','12:00','2022-12-12','5',true,3),
(4,'Đà Nẵng', 'Sài Gòn', '200000','12:00','2022-12-12','5',true,2),
(5,'Đà Nẵng', 'Nha Trang', '200000','12:00','2022-12-12','5',true,3),
(6,'Đà Nẵng', 'Nga', '200000','12:00','2022-12-12','5',true,1),
 (7,'Đà Nẵng', 'Lào Cai', '200000','12:00','2022-12-12','5',true,2);
 
 select* from ve_xe where trang_thai = true;
