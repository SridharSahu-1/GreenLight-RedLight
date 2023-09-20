import { Box, VStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../redux/playerReducer";
import { addToLeaderboard } from "../redux/leaderboardReducer";

export default function PlayGround() {
  const { isGameStarted, target, status, name } = useSelector(
    (state) => state.player
  );
  const [isGreen, setIsGreen] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(40);
  const [randomTime, setRandomTime] = useState(Math.random() + 1);
  const dispatch = useDispatch();

  function resetState() {
    setIsGreen(false);
    setScore(0);
    setTime(40);
  }

  useEffect(() => {
    if (status === "") {
      resetState();
    }
  }, [status]);

  useEffect(() => {
    let intervalId;
    if (isGameStarted) {
      intervalId = setInterval(() => {
        setTime((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            clearInterval(intervalId);
            dispatch(setStatus("LOSE"));
          }
        });
      }, 1000);
    }
    if (status === "WIN" || status === "LOSE") {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [time, isGameStarted, dispatch, status]);

  useEffect(() => {
    let timeoutId;
    if (isGameStarted) {
      timeoutId = setTimeout(() => {
        if (!isGameStarted) {
          clearTimeout(timeoutId);
          return;
        }
        setRandomTime(Math.random() + 1);
        setIsGreen(!isGreen);
      }, randomTime * 1000);
    }
    if (status === "WIN" || status === "LOSE") {
      clearTimeout(timeoutId);
    }
    return () => clearTimeout(timeoutId);
  }, [randomTime, isGameStarted, isGreen, status]);

  return (
    <VStack hidden={!isGameStarted} width="calc(100% - 20px)">
      <Text color={"white"}> Your score : {score}</Text>
      <Text color={"white"}>Time left : {time}</Text>
      <Box
        onClick={() => {
          if (isGreen) {
            if (target === score + 1) {
              dispatch(setStatus("WIN"));
              dispatch(
                addToLeaderboard({
                  name: name,
                  time: 40 - time,
                })
              );
              setScore(target);
            } else {
              setScore((score) => score + 1);
            }
          } else {
            dispatch(setStatus("LOSE"));
          }
        }}
        backgroundColor={isGreen ? "green" : "red"}
        height="300px"
        maxWidth="600px"
        cursor="pointer"
        as="button"
        width="calc(100% - 20px)"
      ></Box>
    </VStack>
  );
}
