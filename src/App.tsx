import { ThemeProvider } from '@creditas-ui/system';
import { standard } from '@creditas-ui/themes';
import { BlogSection } from './components/BlogSection';

export const App = () => {
  return (
    <ThemeProvider theme={standard}>
      <BlogSection />
    </ThemeProvider>
  );
};
