import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type CharacterProps = {
  name: string;
  image: string;
  id: string;
  created: string;
};

export const Character: React.FC<CharacterProps> = ({
  name,
  image,
  id,
  created,
}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <CardMedia sx={{ height: 300 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {created}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button variant="outlined" size="medium">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
