import React from 'react'
import styled from 'styled-components'
import Text from '../Text'

const TA = () => (
  <ul>
    <ListItem>
      <ListText>
        Taught the School of Computing module:
        {' '}
        <i>Programming Methodology II</i>
      </ListText>
    </ListItem>
    <ListItem>
      <ListText>
        Conducted lessons to teach and guide students to complete weekly
        programming assignments
      </ListText>
    </ListItem>
    <ListItem>
      <ListText>
        Reviewed and gave feedback for code submissions
      </ListText>
    </ListItem>
    <ListItem>
      <ListText style={{ fontWeight: '600' }}>
        Module content includes:
      </ListText>
      <ul>
        <ListItem>
          <ListText>
            Object-oriented programming principles
          </ListText>
        </ListItem>
        <ListItem>
          <ListText>
            Functional programming principles
          </ListText>
        </ListItem>
        <ListItem>
          <ListText>
            Java constructs
          </ListText>
        </ListItem>
      </ul>
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
