import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { content } from 'fixtures/content';

type DummyContentProps = {
  contentSize?: number;
};

const DummyContent: FC<DummyContentProps> = ({ contentSize = 20 }) => (
  <>
    {Array(contentSize)
      .fill(content)
      .map((paragraph, index) => (
        <Text key={index} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
  </>
);

const styles = StyleSheet.create({
  paragraph: {
    paddingHorizontal: 24,
    paddingBottom: 8,
    fontSize: 16,
  },
});

export default DummyContent;
