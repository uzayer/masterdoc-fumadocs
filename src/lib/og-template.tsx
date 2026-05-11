import type { ReactElement } from 'react';

const BG = '#111110';
const FG = '#f2ede8';
const MUTED = '#7a756f';
const RULE = '#2e2c29';

export function SiteOgImage(): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        background: BG,
        padding: '72px 80px',
        fontFamily: '"Tenor Sans"',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <p style={{ margin: 0, fontSize: 20, color: MUTED, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Uzayer Masud
        </p>
        <div style={{ width: 40, height: 1, background: RULE }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h1 style={{ margin: 0, fontSize: 68, fontWeight: 400, color: FG, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          I design systems for humans.
        </h1>
        <p style={{ margin: 0, fontSize: 24, color: MUTED, fontFamily: 'system-ui', fontWeight: 400 }}>
          Language · cognition · infrastructure that outlasts any one person.
        </p>
      </div>

      <p style={{ margin: 0, fontSize: 18, color: MUTED, fontFamily: 'system-ui' }}>
        helloworld.uzayermasud.com
      </p>
    </div>
  );
}

export function PageOgImage({
  title,
  description,
}: {
  title: string;
  description?: string;
}): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        background: BG,
        padding: '72px 80px',
        fontFamily: '"Tenor Sans"',
      }}
    >
      <p style={{ margin: 0, fontSize: 20, color: MUTED, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'system-ui' }}>
        Uzayer Masud
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h1
          style={{
            margin: 0,
            fontSize: title.length > 40 ? 56 : 72,
            fontWeight: 400,
            color: FG,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
        {description && (
          <p style={{ margin: 0, fontSize: 22, color: MUTED, fontFamily: 'system-ui', fontWeight: 400, lineHeight: 1.5 }}>
            {description}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ flex: 1, height: 1, background: RULE }} />
        <p style={{ margin: 0, fontSize: 18, color: MUTED, fontFamily: 'system-ui' }}>
          helloworld.uzayermasud.com
        </p>
      </div>
    </div>
  );
}
