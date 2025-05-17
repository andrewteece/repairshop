import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  config({ path: '.env.local' });
}

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!);

// logger
// const db = drizzle(sql, { logger: true })

// const db = drizzle(sql);

const db = drizzle({ client: sql });

// export const db = drizzle({ client: sql });

export { db };
