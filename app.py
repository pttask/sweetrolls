from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'rahasia_manis_sekali' # Dibutuhkan agar fitur notifikasi (flash) berfungsi

# Route 1: Halaman Home
@app.route('/')
def home():
    return render_template('home.html')

# Route 2: Halaman Product List
@app.route('/products')
def products():
    return render_template('products.html')

# Route 3: Halaman Checkout dengan Validasi
@app.route('/checkout', methods=['GET', 'POST'])
def checkout():
    if request.method == 'POST':
        # Mengambil data dari form HTML
        nama = request.form.get('nama')
        whatsapp = request.form.get('whatsapp')
        alamat = request.form.get('alamat')
        
        # Validasi Backend: Memastikan tidak ada form yang kosong
        if not nama or not whatsapp or not alamat:
            flash('Gagal! Semua kolom pengiriman wajib diisi.', 'danger')
            return redirect(url_for('checkout'))
        
        # Jika berhasil
        flash(f'Yeay! Terima kasih {nama}. Pesananmu sedang diproses!', 'success')
        return redirect(url_for('home'))
        
    return render_template('checkout.html')

if __name__ == '__main__':
    app.run(debug=True)