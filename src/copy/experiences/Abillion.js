import React from 'react'
import styled from 'styled-components'
import Text from '../../components/Text'

const TA = () => (
  <ul>
    <ListItem>
      <ListText>
        Revamped user profile and settings screens on the mobile app
      </ListText>
    </ListItem>
    <ListItem>
      <ListText>
        Implemented API endpoints and database modifications for features such as:
        <ul>
          <ListItem>
            <ListText>
              Allowing users to make restaurant bookings via Chope
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Integrating SEO-friendly recipe articles
            </ListText>
          </ListItem>
        </ul>
      </ListText>
    </ListItem>
    <ListItem>
      <ListText>
        {'Revamped the '}
        <a href="https://www.abillion.com/careers">careers</a>
        {' webpage'}
      </ListText>
    </ListItem>
    <ListItem>
      <ListText>
        Added a feature on the webpage that allows users to add and view saved collection items
      </ListText>
    </ListItem>
    <ListItem>
      <ListText style={{ fontWeight: '600' }}>
        {`abillion is a global internet platform for the sustainability movement.
        It's a social and peer review community with over 250k members active across English,
        Spanish & Asian markets.`}
      </ListText>
    </ListItem>
  </ul>
)

export default TA

const ListItem = styled.li`
  font-size: 18px;
`

const ListText = styled(Text)`
  line-height: 26px;
`
