### keuangan
CREATE TABLE `kategori_transaksi` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_kategori` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `transaksi` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_transaksi` VARCHAR(255) NOT NULL,
  `jumlah` DECIMAL(10, 2) NOT NULL,
  `tanggal_transaksi` DATE NOT NULL,
  `kategori_id` INT,
  `keterangan` VARCHAR(255),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`kategori_id`) REFERENCES `kategori_transaksi`(`id`)
);

CREATE TABLE `tabungan` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_tabungan` VARCHAR(255) NOT NULL,
  `jumlah` DECIMAL(10, 2) NOT NULL,
  `tanggal` DATE NOT NULL,
  `keterangan` VARCHAR(255),
  PRIMARY KEY (`id`)
);


<!-- -- Menambahkan data ke tabel kategori_transaksi -->
INSERT INTO `kategori_transaksi` (`nama_kategori`)
VALUES 
    ('Pendapatan'),
    ('Pengeluaran'),
    ('Investasi');

<!-- -- Menambahkan data ke tabel transaksi -->
INSERT INTO `transaksi` (`nama_transaksi`, `jumlah`, `tanggal_transaksi`, `kategori_id`, `keterangan`)
VALUES 
    ('Gaji', 5000.00, '2024-02-01', 1, 'Pendapatan bulanan'),
    ('Makan Siang', 20.00, '2024-02-05', 2, 'Makan siang di restoran'),
    ('Investasi Saham', 1000.00, '2024-02-10', 3, 'Pembelian saham XYZ');

<!-- -- Menambahkan data ke tabel tabungan -->
INSERT INTO `tabungan` (`nama_tabungan`, `jumlah`, `tanggal`, `keterangan`)
VALUES 
    ('Tabungan Awal', 2000.00, '2024-02-01', 'Tabungan awal bulan'),
    ('Tabungan Akhir', 2500.00, '2024-02-28', 'Tabungan akhir bulan');

<!-- Left Join -->
SELECT *
FROM kategori_transaksi
LEFT JOIN transaksi ON kategori_transaksi.id = transaksi.kategori_id;

<!-- Right Join -->
SELECT *
FROM kategori_transaksi
RIGHT JOIN transaksi ON kategori_transaksi.id = transaksi.kategori_id;

<!-- Inner Join -->
SELECT *
FROM kategori_transaksi
INNER JOIN transaksi ON kategori_transaksi.id = transaksi.kategori_id;

<!-- Update -->
UPDATE kategori_transaksi
SET nama_kategori = 'Pembelian'
WHERE id = 1;

<!-- Delete -->
