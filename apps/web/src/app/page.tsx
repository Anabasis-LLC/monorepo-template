// package
import { getSessionUser } from '@anabasis/auth/server';

// lib
import { ShellPage } from '@/app/shell-page';
import { Home } from '@/components/pages/home';

/**
 * Page
 */

export default async function Page() {
  const sessionUser = await getSessionUser();

  return (
    <ShellPage
      sessionUser={sessionUser}
      requireAuthentication={false}
      container={false}
    >
      <Home />
    </ShellPage>
  );
}
