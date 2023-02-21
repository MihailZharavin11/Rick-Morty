import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type CharacterProps = {
  name: string;
  image: string;
  id: string;
  created: string;
};

export const CharacterCard: React.FC<CharacterProps> = ({
  name,
  image,
  id,
  created,
}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <CardActionArea>
        <Link underline="none" component={RouterLink} to={`character/${id}`}>
          <CardMedia sx={{ height: 300 }} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(created).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
