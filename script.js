//setTimeout()
//setTimeout, ini akan menjalankan program kita setelah kita menunggu beberapa waktu tergantung waktu yang kita masukan dalam parameter setTimeout nya

//-----------------------------------------

// setTimeout(tampilPesan, 3000)

// function tampilPesan(){
//     alert('halo masseh')
// }

// //bisa juga kayak gini :
//  setTimeout(function(){
//     prompt('apakah kamu jawir?')
//  }, 2000)


//  const tes = setTimeout(function(){
//     const h1 = document.createElement('h1')
//     const body = document.body
//     h1.textContent = 'kamu adalah JAWIR!'
//     body.append(h1)
//  }, 4000)


// const tombol = document.getElementById('tombol')
// tombol.addEventListener('click', function(){
//   clearTimeout(tes)
//   alert('done wirr')
// })


//setInterval()
//setInterval, melakukan secara berulang-ulang dgn inrerval waktu yg tertentu

//-----------------------------------------

// const test = setInterval(function(){
//     alert('JAWIR!')
// },3000)  
// // kode ini akan memunculkan alert terus-menerus dgn jeda selama dua detik

// const button = document.getElementById('button')
// button.addEventListener('click', function(){
//   clearInterval(test)
//   alert('alert mati wirr')
// })










//program hitung mundur

function getValue() {
  const tanggalTujuan = new Date(document.getElementById("input").value)
  
  const hitungMundur = setInterval(function(){
      const sekarang = new Date().getTime()
      const selisih = tanggalTujuan - sekarang
      
      const hari = Math.floor(selisih / (1000 * 60 * 60 * 24))
      
      const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
      
      const menit = Math.floor(selisih % (1000 * 60 * 60 ) / (1000 * 60 ))
      
      const detik = Math.floor(selisih % (1000 * 60 ) / 1000 )
      
      
      const tulisan = document.getElementById('text')
      text.innerHTML = 
      'waktu anda sisa : ' + hari + ' hari ' + jam + ' jam '+ menit + ' menit '+  detik + ' detik lagi'
  
      if(selisih == 0) {
          clearInterval(hitungMundur)
          text.innerHTML = 'waktu mu telah habis wirr!'
      }
      
  },1000)
  
}




