import useScreenShots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((screenshot) => (
          <Image key={screenshot.id} src={screenshot.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
