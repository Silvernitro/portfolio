import React from "react";
import styled from "styled-components";
import Text from "../../components/Text";

const WonderWorkshop = () => (
  <ul>
    <ListItem>
      <ListText>
        Not too much because I've just started, but here's a couple of things
        I've worked on so far:
        <ul>
          <ListItem>
            <ListText>
              Worked with Looker and wrote non-trivial SQL queries to measure
              user engagement.
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Set up a frontend flow that allows new users to auto-activate
              their purchased product licenses.
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Set up an ETL pipeline between the production DocumentDB database
              and a Snowflake data warehouse. I used AWS Glue and SnowPipe for
              this.
            </ListText>
          </ListItem>
          <ListItem>
            <ListText>
              Created a new profile customization page for users on the Class
              Connect platform.
            </ListText>
          </ListItem>
        </ul>
      </ListText>
    </ListItem>
  </ul>
);

export default WonderWorkshop;

const ListItem = styled.li`
  font-size: 18px;
`;

const ListText = styled(Text)`
  line-height: 26px;
`;
