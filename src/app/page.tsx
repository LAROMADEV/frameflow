'use client';

import { useState } from 'react';

export default function Home() {
  const [reply, setReply] = useState('');

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Frameflow</h1>
      <button
        className="mt-4 rounded border px-3 py-1"
        onClick={async () =>
          setReply(window.frameflow ? await window.frameflow.ping() : 'Pas dans Electron')
        }
      >
        Tester le pont Electron
      </button>
      <p className="mt-4">{reply}</p>
    </main>
  );
}