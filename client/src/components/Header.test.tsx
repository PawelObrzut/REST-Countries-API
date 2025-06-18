import Header from './Header'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Header component ', () => {
  let user: ReturnType<typeof userEvent.setup>
  let toggleThemeMock: jest.Mock
  
  beforeEach(() => {
    user = userEvent.setup()
    toggleThemeMock = jest.fn()

    render (
      <Header isDark={false} toggleTheme={toggleThemeMock}/>
    )
  })

  it('should render a slogan', async () => {
    expect(await screen.findByText(/where in the world/i)).toBeInTheDocument();
  })

  it('should toggle theme', async () => {
    await user.click(screen.getByRole('button', { name: /dark mode/i }));
    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  })
})