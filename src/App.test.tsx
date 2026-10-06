import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows the professional profile and current employment', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Soy Rony Reyna' })).toBeInTheDocument();
  expect(screen.getByText(/más de 8 años/i)).toBeInTheDocument();
  expect(screen.getByText('Desarrollador de software - SERTECPET')).toBeInTheDocument();
  expect(screen.getByText('ene. 2024 - actualidad')).toBeInTheDocument();
  expect(screen.getByText('abr. 2022 - ene. 2024')).toBeInTheDocument();
  expect(screen.queryByText(/R2Develop|más de 5 años/i)).not.toBeInTheDocument();
});

test('opens projects and identifies Intense IA as shared', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('tab', { name: 'Proyectos' }));
  expect(screen.getByRole('heading', { name: 'Intense IA' })).toBeInTheDocument();
  expect(screen.getByText(/Proyecto compartido relacionado/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Explorar mis repositorios/ })).toHaveAttribute('href', 'https://github.com/DorianRony?tab=repositories');
});

test('provides direct safe contact links without offering the old CV', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:ronyreyna1995@gmail.com');
  ['GitHub', 'LinkedIn'].forEach(name => {
    expect(screen.getByRole('link', { name })).toHaveAttribute('rel', 'noopener noreferrer');
  });
  expect(screen.queryByRole('button', { name: /Descargar CV/ })).not.toBeInTheDocument();
});
