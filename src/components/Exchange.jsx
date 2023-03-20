/* eslint-disable no-unused-vars */
import React from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar, Statistic, Card } from 'antd'
import HTMLReactParser from 'html-react-parser'

import { useGetCryptoExchangeQuery } from '../services/cryptoApi'
import Loader from './Loader'

const { Title, Text } = Typography
const { Panel } = Collapse

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangeQuery('Qwsogvtv82FCd')

  const exchangeData = data?.data?.exchanges
  // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />

  return (
    <>
      <Title level={3} className="heading">
        Global exchange rates
      </Title>
      <Row gutter={[24, 24]}>
        {exchangeData?.map((item) => (
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <div className="exchange-card">
                <span>{item.name}</span>
                <span>{item.rank}</span>
                <div>
                  <img
                    src={item.iconUrl || ''}
                    alt=""
                    width={50}
                    style={{
                      borderRadius: '50%',
                    }}
                  />
                </div>
              </div>
              <div className="exchange-card">
                <span>{millify(item.price)}</span>
                <span>{millify(item.btcPrice)}</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Exchanges
