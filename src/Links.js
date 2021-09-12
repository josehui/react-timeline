import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";

export default function Links() {
    return (
        <Box mx={4}>
        <Typography variant="h4">Tool</Typography>
        <ul>
            <li>
            <Link href="#">
                Link
            </Link>
            </li>
            <li>hihi</li>
            <li>hihi</li>
            <li>hihi</li>
        </ul>
        <Typography variant="h4">Documentation</Typography>
        <ul>
            <li>hihi</li>
            <li>hihi</li>
            <li>hihi</li>
            <li>hihi</li>
        </ul>
        <Typography variant="h4">Learning Resource</Typography>
        <ul>
            <li>hihi</li>
            <li>hihi</li>
            <li>hihi</li>
            <li>hihi</li>
        </ul>
        <Typography variant="h4">Support</Typography>
        <ul>
            <li>hihi</li>
            <li>hihi</li>
            <li>hihi</li>
            <li>hihi</li>
        </ul>
      </Box>
    );
  }