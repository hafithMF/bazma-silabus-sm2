### database keuangan pribadi
 nama = database keuangan

 <!-- Membuat table pendapatan -->
CREATE TABLE `pendapatan` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_transaksi` VARCHAR(255) NOT NULL,
  `jumlah` DECIMAL(10, 2),
  `tanggal_transaksi` DATE NOT NULL,
  `keterangan` VARCHAR(255),
  PRIMARY KEY (`id`)
);

 <!-- Membuat table pengeluaran -->
CREATE TABLE `pengeluaran` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_transaksi` VARCHAR(255) NOT NULL,
  `jumlah` DECIMAL(10, 2),
  `tanggal_transaksi` DATE NOT NULL,
  `keterangan` VARCHAR(255),
  PRIMARY KEY (`id`)
);

 <!-- Membuat table tabungan -->
CREATE TABLE `tabungan` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_transaksi` VARCHAR(255) NOT NULL,
  `jumlah` DECIMAL(10, 2),
  `tanggal_transaksi` DATE NOT NULL,
  `keterangan` VARCHAR(255),
  PRIMARY KEY (`id`)
);

 <!-- Membuat table laporan keuangan -->
CREATE TABLE `laporan_keuangan` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tanggal` DATE,
  `total_pendapatan_id` INT,
  `total_pengeluaran_id` INT,
  `total_tabungan_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`total_pendapatan_id`) REFERENCES `pendapatan`(`id`),
  FOREIGN KEY (`total_pengeluaran_id`) REFERENCES `pengeluaran`(`id`),
  FOREIGN KEY (`total_tabungan_id`) REFERENCES `tabungan`(`id`)
);

INSERT INTO `pendapatan` (`nama_transaksi`, `jumlah`, `tanggal_transaksi`, `keterangan`)
VALUES 
    ('Gaji', 5000.00, '2024-02-10', 'Pendapatan bulanan dari pekerjaan'),
    ('Bonus', 1000.00, '2024-02-15', 'Bonus kinerja tahunan');

INSERT INTO `pengeluaran` (`nama_transaksi`, `jumlah`, `tanggal_transaksi`, `keterangan`)
VALUES 
    ('Makanan', 50.00, '2024-02-08', 'Makan siang di restoran'),
    ('Transportasi', 20.00, '2024-02-12', 'Ongkos naik bus');

INSERT INTO `tabungan` (`nama_transaksi`, `jumlah`, `tanggal_transaksi`, `keterangan`)
VALUES 
    ('Simpanan Bulanan', 200.00, '2024-02-05', 'Menabung setiap bulan'),
    ('Hadiah', 50.00, '2024-02-20', 'Uang hadiah dari teman');

INSERT INTO `laporan_keuangan` (`tanggal`, `total_pendapatan_id`, `total_pengeluaran_id`, `total_tabungan_id`)
    VALUES
    ('2024-02-01', 1, 1, 1),
    ('2024-02-15', 2, 2, 2);


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


-- Menambahkan data ke tabel kategori_transaksi
INSERT INTO `kategori_transaksi` (`nama_kategori`)
VALUES 
    ('Pendapatan'),
    ('Pengeluaran'),
    ('Investasi');

-- Menambahkan data ke tabel transaksi
INSERT INTO `transaksi` (`nama_transaksi`, `jumlah`, `tanggal_transaksi`, `kategori_id`, `keterangan`)
VALUES 
    ('Gaji', 5000.00, '2024-02-01', 1, 'Pendapatan bulanan'),
    ('Makan Siang', 20.00, '2024-02-05', 2, 'Makan siang di restoran'),
    ('Investasi Saham', 1000.00, '2024-02-10', 3, 'Pembelian saham XYZ');

-- Menambahkan data ke tabel tabungan
INSERT INTO `tabungan` (`nama_tabungan`, `jumlah`, `tanggal`, `keterangan`)
VALUES 
    ('Tabungan Awal', 2000.00, '2024-02-01', 'Tabungan awal bulan'),
    ('Tabungan Akhir', 2500.00, '2024-02-28', 'Tabungan akhir bulan');
