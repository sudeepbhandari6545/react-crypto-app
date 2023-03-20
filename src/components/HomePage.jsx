import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import { Link } from 'react-router-dom'
import Cryptocurrency from './Cryptocurrency'
import News from './News'
import Loader from './Loader'

const { Title } = Typography
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats

  if (isFetching) return <Loader />
  return (
    <>
      <Title level={3} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrency" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchange"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrency in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/crypto">Show More</Link>
        </Title>
      </div>
      <Cryptocurrency simfiled />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top Crypto news
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simfiled />
    </>
  )
}

export default HomePage
