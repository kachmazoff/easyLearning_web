import React from "react";
import { connect } from "react-redux";
import { Descriptions, Typography } from "antd";
import { RootState } from "@/store";
import { IQuestion } from "@/interfaces";
import { getQuestionInfo } from "./asyncAction";
import { questionSlice } from "./reducer";

const mapStateToProps = (
  rootState: RootState,
  ownProps: QuestionModuleOwnProps
) => {
  const { questionId } = ownProps;
  const questionData = rootState[questionSlice.name][questionId] || {};

  return {
    info: questionData.question || undefined,
  };
};

const mapDispatchToProps = {
  getInfo: getQuestionInfo,
};

interface QuestionModuleOwnProps {
  questionId: string;
}

interface QuestionModuleProps extends QuestionModuleOwnProps {
  info?: IQuestion;
  getInfo: (questionId: string) => any;
}

const QuestionComponent = ({
  questionId,
  info,
  getInfo,
}: QuestionModuleProps) => {
  React.useEffect(() => {
    if (!info) {
      getInfo(questionId);
    }
  }, [questionId, info, getInfo]);

  return (
    <div>
      <Descriptions title={<Typography.Title>{info?.data}</Typography.Title>}>
        {!!info?.description && (
          <Descriptions.Item label="Комментарий">
            {info?.description}
          </Descriptions.Item>
        )}
        <Descriptions.Item label="Автор">kachmazoff</Descriptions.Item>
      </Descriptions>
      {/* <Typography.Title>{info?.data}</Typography.Title> */}
      {/* {!!info?.description && (
        <Typography.Text>{`Комментарий к вопросу:  ${info?.description}`}</Typography.Text>
      )} */}
    </div>
  );
};

export const QuestionModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionComponent);
