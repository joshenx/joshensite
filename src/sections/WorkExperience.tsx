import React, { SyntheticEvent } from "react";
import { Button, TextInput } from "react95";
import styled from "styled-components";
import { Title } from "../App";
import { ColFlex } from "../components/Flex";
import { CursorType } from "../components/StyledCursor";
import Text from "../components/Text";
import { useCursor } from "../context/CursorContext";
import { experiences } from "../experience";

const Container = styled(ColFlex).attrs({ $gap: 16 })`
  width: 100%;
  max-width: 1920px;
  padding: 32px;

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  gap: 16px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const Column = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
`;

const WorkExperience = () => {
  const { showCursor, setShowCursor, setCursorType, setEmoji } = useCursor();

  return (
    <Container>
      <Title>
        <Text>work experience</Text>
      </Title>

      <Grid>
        {experiences.map((experience) => (
          <Row>
            <Column>
              <ColFlex $gap={8} $grow={1}>
                <p>Start: </p>
                <TextInput
                  value={`${experience.startMonth} ${experience.startYear}`}
                  style={{ width: "100%" }}
                />
              </ColFlex>
              <ColFlex $gap={8} $grow={1}>
                <p>End: </p>
                <TextInput
                  value={
                    experience.endYear && experience.endMonth
                      ? `${experience.endMonth} ${experience.endYear}`
                      : "Present"
                  }
                  style={{ width: "100%" }}
                />
              </ColFlex>
            </Column>
            <Column>
              <ColFlex $gap={8} $grow={1}>
                <p>Company: </p>
                <TextInput
                  value={experience.company}
                  style={{ width: "100%" }}
                />
              </ColFlex>
              <ColFlex $gap={8} $grow={1}>
                <p>Role: </p>
                <TextInput
                  value={experience.position}
                  style={{ width: "100%" }}
                />
              </ColFlex>
            </Column>
          </Row>
          // <GroupBox
          //   key={index}
          //   label={
          //     experience.companyLink ? (
          //       <a href={`${experience.companyLink}`}>{experience.company}</a>
          //     ) : (
          //       experience.company
          //     )
          //   }
          // >
          //   <RowFlex $gap={16}>
          //     <ColFlex $gap={8} $grow={1}>
          //       <p>Start: </p>
          //       <TextInput
          //         value={`${experience.startMonth} ${experience.startYear}`}
          //         style={{ width: "100%" }}
          //       />
          //     </ColFlex>
          //     <ColFlex $gap={8} $grow={1}>
          //       <p>End: </p>
          //       <TextInput
          //         value={
          //           experience.endYear && experience.endMonth
          //             ? `${experience.endMonth} ${experience.endYear}`
          //             : "Present"
          //         }
          //         style={{ width: "100%" }}
          //       />
          //     </ColFlex>
          //   </RowFlex>
          //   <RowFlex $gap={16}>
          //     <ColFlex $gap={8} $grow={1}>
          //       <p>Company: </p>
          //       <TextInput
          //         value={experience.company}
          //         style={{ width: "100%" }}
          //       />
          //     </ColFlex>
          //     <ColFlex $gap={8} $grow={1}>
          //       <p>Role: </p>
          //       <TextInput
          //         value={experience.position}
          //         style={{ width: "100%" }}
          //       />
          //     </ColFlex>
          //   </RowFlex>
          // </GroupBox>
        ))}
      </Grid>
    </Container>
  );
};

export default WorkExperience;
