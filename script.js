</head>
<body><div class="container">  <!-- Language Screen -->  <div id="langScreen" class="card">
    <h2>AgriLink</h2>
    <p>Sell Crops Securely</p>
    <select>
      <option>English</option>
      <option>Hindi</option>
      <option>Kannada</option>
    </select>
    <button class="btn" onclick="goDashboard()">Continue</button>
  </div>  <!-- Dashboard -->  <div id="dashboard" class="hidden">
    <div class="header">
      <h3>Hello Farmer 👋</h3>
      <span class="badge">Secure</span>
    </div><div class="card">
  <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" />
  <h3>Sell your crops at best price</h3>
  <button class="btn" onclick="showAdd()">+ Add Crop</button>
</div>

<div id="listings"></div>

<div class="card">
  <h4>Market Insight</h4>
  <p>Recommended Price: ₹2100</p>
</div>

  </div>  <!-- Add Crop -->  <div id="addCrop" class="hidden card">
    <h3>Add Crop</h3>
    <input type="text" id="cropName" placeholder="Crop Name" />
    <input type="number" id="quantity" placeholder="Quantity" />
    <input type="number" id="price" placeholder="Price" />
    <button class="btn" onclick="addCrop()">List for Sale</button>
  </div></div><script>
  function goDashboard(){
    document.getElementById('langScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  }

  function showAdd(){
    document.getElementById('addCrop').classList.remove('hidden');
  }

  function addCrop(){
    let name=document.getElementById('cropName').value;
    let qty=document.getElementById('quantity').value;
    let price=document.getElementById('price').value;

    let card=`<div class="card">
      <h4>${name}</h4>
      <p>Qty: ${qty}</p>
      <p>Price: ₹${price}</p>
      <p>Status: Bidding</p>
    </div>`;

    document.getElementById('listings').innerHTML+=card;
    document.getElementById('addCrop').classList.add('hidden');
  }
</script></body>
</html>