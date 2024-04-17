import { redirect } from 'next/navigation';

/**
 * Redirect route /documentation to public/index.html i.e. to Typedoc output.
 */
export default async function Documentation() {
  redirect('index.html');
}
