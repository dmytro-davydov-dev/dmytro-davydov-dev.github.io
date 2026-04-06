import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Skillset = () => {
    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={0}>
                <Typography variant="h2" component="h1" color="text.darkBlue">
                    Skillset
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Programming Languages:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        JavaScript, TypeScript, Python, SQL
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Frontend:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        React, Redux, Material UI, Tailwind CSS
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Backend:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        Node.js, Express, MongoDB
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Databases:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        PostgreSQL, MySQL, MongoDB, Redis, Firebase
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        DevOps and Cloud:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        Docker, Kubernetes, AWS, GCP
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Tools:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        Git, Postman, Jira, Slack, Figma
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Soft Skills:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        Teamleading, Communication, Problem-solving
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Languages:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        English, Spanish, French
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Hobbies:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        Reading, Traveling, Gaming
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h5" component="h2" color="text.darkBlue">
                        Interests:
                    </Typography>
                    <Typography variant="body1" color="text.darkBlue">
                        AI, Blockchain, Web Development
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default Skillset;