import React from "react";
import styled from "styled-components";
import Text from "../../components/Text";

const AbillionTwo = () => (
  <ul>
    <ListItem>
      <ListText>
        Set up a frontend framework to track content impressions across the
        website and mobile app.
        <ul>
          <ListItem>
            <ListText>
              Track component visibility to determine user impressions, buffer
              and persist impression data locally before sending to the backend.
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Worked with ReactJS for the website, React Native for the mobile
              app.
            </ListText>
          </ListItem>
        </ul>
      </ListText>
    </ListItem>
    <ListItem>
      <ListText>
        Wrote an ExpressJS endpoint to receive impression data and store it in a
        MongoDB database.
      </ListText>
    </ListItem>
  </ul>
);

export default AbillionTwo;

const ListItem = styled.li`
  font-size: 18px;
`;

const ListText = styled(Text)`
  line-height: 26px;
`;
