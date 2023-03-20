import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Exchange from './components/Exchange'
import Cryptocurrency from './components/Cryptocurrency'
import CryptoDetails from './components/CryptoDetails'
import News from './components/News'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/exchange" element={<Exchange />} />
              <Route exact path="/crypto" element={<Cryptocurrency />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ textAlign: 'center', color: 'white' }}
          >
            Cryptoverse <br />
            All right reserve 2023
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
