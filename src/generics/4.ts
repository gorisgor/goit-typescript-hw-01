// Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.
// Використовуючи утиліту Partial та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.
// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// }
// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }
// createOrUpdateUser({ 
//   email: 'user@mail.com', 
//   password: 'password123' 
// });

export type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
export function createOrUpdateUser(initialValues: Partial<User>) {
  console.log('task4', initialValues); 
  // Оновлення користувача
  }
