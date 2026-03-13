import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';

export default function configurePassport(passport, prisma) {
  passport.use(
    new LocalStrategy.Strategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return done(null, false, { message: 'No user with that email.' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Password incorrect.' });
        }
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      const { password, ...userWithoutPassword } = user;
      done(null, userWithoutPassword);
    } catch (err) {
      done(err, null);
    }
  });
}
