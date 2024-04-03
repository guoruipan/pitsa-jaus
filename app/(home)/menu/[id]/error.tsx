'use client' // Error components must be Client Components
 
// https://nextjs.org/docs/app/building-your-application/routing/error-handling

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PageTitle from '#/components/ui/PageTitle';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Box>
      <PageTitle gutterBottom>¡Algo ha ido mal!</PageTitle>
      <Button variant={"contained"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Inténtalo de nuevo
      </Button>
    </Box>
  )
}