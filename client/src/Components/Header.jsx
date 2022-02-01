import React from 'react'

const Header = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6),rgba(0,0,0,0.9))"}}>
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="/home">VMI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text-light" href="/admin/">Add</a>
        <a class="nav-link text-light" href="/admin/delete">Delete</a>
        <a class="nav-link text-light" href="/admin/orders">Orders</a>

      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
