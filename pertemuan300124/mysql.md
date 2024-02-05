## pertemuan 1

### Cara membuat database di terminal

Buka terminal, lalu ketikan 'mysql -u root -p' dan pw nya (enter aja)

deafault mysql adalah username: root dan pasword: (kosong)

### Cara membuat database baru

Berikan kode yang ada di module dengan cara `create databases nama_database`

### Memmbuat table baru di smk_personal

Disini akan membuat table baru dengan nama biodata dan kolumnya:
- id, nama, kelas, jurusan, umur;

-id int primary key not null
-nama varcher(255)
-kelas varcher(20)
-jurusan varcher(225)
-umur int

### Lihat data table biodata

Dapat menggunakan query desc biodata;
Dapat juga menggunakan selct * from biodata

### Membuat data baru pada tabel biodata

Disini akan membuat menambahkan  data baru dengan quary berikut

insert into biodata (id, nama, kelas, jurusan, umur) value (1, "Attar", "XI", "SIJA", 16 )

Bagaimana jika ingin melihat datanya? select * from biodata

* = mengambil seluruh data tipenya

+----+-------+-------+---------+------+
| id | nama  | kelas | jurusan | umur |
+----+-------+-------+---------+------+
|  1 | Attar | XI    | SIJA    |   16 |
+----+-------+-------+---------+------+

### Mencari data berdasarkan id

Disini menggunakan query;

select * from biodata where id = ?

### Update data berdasarkan Query

Disini dapat mengubah sesuai dengan kebutuhan query yang ingin di ubah 

Update biodata SET NAMA="..." WHERE id= ?;

### Hapus berdasarkan ID

Dengan menggunakan query seperti inin:
Delete  from biodata Where Id = ?

Buatlah sebuah table dengan nama "sekolahan", didalam table sekolahan, terdapat beberapa kolum: id, 
nama_sekolah, jurusan,kapasitas_siswa, alamat. Buatlah sebanyak 10 data dengan berbagai jenis jurusan dan kapasitas_siswa ;
Sifat datanya dalam video:
Insert Data
Mencari data berdasarkan field
Mengubah Data
Delete Data 

###
select * from sekolahan where alamat = ? and kapasitas_siswa = ?;

### Order by 

- Descending => dimulai dari tulisan z - a / id / created_at
(tanggal_buat)
-  Ascending => dimulai dari a - z / id / created_at

``` sql 
-- mengambil jurusan dari z - a
select * from sekolah ORDER BY jurusan DESC

-- mengambil jurusan dari a -z
select *  from sekolah ORDER BY jurusan ASC

### LIMIT

 sql 
-- membuat jumlah data 
select * from tabel LIMIT 5

-- membatasi jumlah dengan desc / asc
select * from tabel order by jurusan DESC LIMIT 5;

-- dengan where
Select * from tabel
Where condition
LIMIT limition

select * from sekolah where jurursan="SIJA" AND
kapasitas_siswa >= 20 AND alamat="Bogor" OR alamat="Ciampea" 
ORDER BY id ASC LIMIT ? OFFSET ?

### LIKE => Pencarian Data

sql 


### Aliases
sql
-- mendefinisikan pergantian field
select field As asfield,
from tabel;

nama_sekolah as namasekolah, kapasitas_siswa = kapasitas, alamat = tempat

-- nama sekolah
select nama_sekolah as namasekolah from sekolah

select id, nama_sekolah as namasekolah, jurusan, 
kapasitas_siswa as kapasitasSiswa from Sekolah;

### In
sql
select column_name(s)
from table_name
where column_name in (select statement)

select * from tabel
where condition in (s)

select * from sekolah where jurusan 

1. Filtering data (where)
2. Cari data dengan (like) = judul, kategori, penulis
3. Data id Desc
4. Filtering jumlah halaman >= & < & = (bebas)
5. Tahun terbit >= 2020 =< 2026
6. Batas Umur dimulai dari 8 s/d 20
7. Harga dimulai dari desc / asc
8. Harga range dari bebas - bebas (1  - 100000000)
9. Harus ada update delete

1.SELECT * FROM perpustakaan WHERE kategori = 'coding' AND penulis = 'ANDRA';
2.SELECT * FROM perpustakaan WHERE judul LIKE '%Dasar%' OR kategori LIKE '%coding%' OR penulis LIKE '%ANDRA%';
3.SELECT * FROM perpustakaan ORDER BY id DESC;
4.SELECT * FROM perpustakaan WHERE jumlah_halaman >= 220;
5.SELECT * FROM perpustakaan WHERE tahun_terbit BETWEEN 2020 AND 2026;
6.SELECT * FROM perpustakaan WHERE batas_umur BETWEEN 8 AND 20;
7.SELECT * FROM perpustakaan ORDER BY harga DESC; -- (atau ASC untuk urutan naik)
8.SELECT * FROM perpustakaan WHERE harga BETWEEN 1 AND 15000;
9.UPDATE perpustakaan SET harga = 6000 WHERE id = 1;
10.DELETE FROM perpustakaan WHERE id = 2;