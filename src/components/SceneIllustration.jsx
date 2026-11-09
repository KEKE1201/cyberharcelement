const labels = {
  welcome: 'Trois adolescents discutent autour d’un téléphone',
  intro: 'Trois jeunes observent ensemble une conversation en ligne',
  resource: 'Une infographie ouverte sur une tablette',
  clues: 'Un téléphone affiche une photo et des messages de groupe',
  conflict: 'Deux personnes échangent puis mettent fin à un désaccord',
  consent: 'Deux amis plaisantent ensemble et se mettent d’accord',
  repeated: 'Plusieurs notifications arrivent sur le téléphone d’un adolescent',
  ines: 'Inès reçoit des notifications et cherche du soutien',
  summary: 'Quatre repères : répétition, respect, contexte et soutien',
}

function Person({ x, y, color = '#F4B28F', shirt = '#6558D6', scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M7 108c2-31 14-47 31-47s29 16 31 47H7z" fill={shirt} />
      <path d="M31 45h14v13H31z" fill={color} />
      <circle cx="38" cy="27" r="18" fill={color} />
      <path d="M20 27c-1-16 8-27 21-27 12 0 20 10 18 27-4-5-10-8-17-9-7 7-13 10-22 9z" fill="#30314B" />
      <circle cx="32" cy="28" r="1.5" fill="#30314B" />
      <circle cx="44" cy="28" r="1.5" fill="#30314B" />
      <path d="M33 37q5 3 10 0" fill="none" stroke="#9B514D" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  )
}

function Phone({ x = 153, y = 35, alert = false }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="114" height="178" rx="22" fill="#30314B" />
      <rect x="7" y="9" width="100" height="160" rx="15" fill="#fff" />
      <rect x="39" y="4" width="36" height="5" rx="3" fill="#30314B" />
      <rect x="16" y="25" width="66" height="10" rx="5" fill="#E9E7FF" />
      <rect x="16" y="47" width="77" height="34" rx="11" fill="#6558D6" />
      <rect x="25" y="58" width="52" height="5" rx="3" fill="#fff" opacity=".9" />
      <rect x="25" y="68" width="38" height="4" rx="2" fill="#fff" opacity=".7" />
      <rect x="31" y="92" width="70" height="31" rx="11" fill="#EAF7F4" />
      <rect x="40" y="103" width="47" height="5" rx="3" fill="#438D7A" opacity=".75" />
      <rect x="16" y="134" width="83" height="21" rx="10" fill="#F1F0F6" />
      {alert && <circle cx="100" cy="20" r="12" fill="#E66C78" stroke="#fff" strokeWidth="3" />}
    </g>
  )
}

function IllustrationContent({ kind }) {
  if (kind === 'resource') {
    return (
      <g>
        <path d="M76 55q49-23 96 0v116q-47-23-96 0z" fill="#fff" stroke="#41415E" strokeWidth="5" />
        <path d="M172 55q49-23 96 0v116q-47-23-96 0z" fill="#F8F7FF" stroke="#41415E" strokeWidth="5" />
        <path d="M172 58v111" stroke="#D8D5EC" strokeWidth="4" />
        <rect x="93" y="80" width="59" height="10" rx="5" fill="#6558D6" />
        <rect x="93" y="102" width="63" height="7" rx="4" fill="#D8D5EC" />
        <rect x="93" y="118" width="52" height="7" rx="4" fill="#D8D5EC" />
        <circle cx="214" cy="96" r="23" fill="#DDF2EA" />
        <path d="m203 97 8 8 15-18" fill="none" stroke="#31856D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="190" y="133" width="50" height="7" rx="4" fill="#D8D5EC" />
        <path d="M120 55V31l18 11 17-11v24" fill="#F2B253" />
      </g>
    )
  }

  if (kind === 'clues') {
    return (
      <g>
        <Phone x={153} y={31} alert />
        <rect x="166" y="76" width="88" height="43" rx="8" fill="#E4B7A0" />
        <circle cx="209" cy="94" r="15" fill="#F6D8A8" />
        <path d="M190 111q18-23 38 0" fill="#6E79A9" />
        <path d="M42 66h76a15 15 0 0 1 15 15v18a15 15 0 0 1-15 15H84l-17 13v-13H42a15 15 0 0 1-15-15V81a15 15 0 0 1 15-15z" fill="#fff" stroke="#6558D6" strokeWidth="3" />
        <circle cx="52" cy="90" r="4" fill="#6558D6" /><circle cx="66" cy="90" r="4" fill="#6558D6" /><circle cx="80" cy="90" r="4" fill="#6558D6" />
        <path d="M290 119h79a14 14 0 0 1 14 14v15a14 14 0 0 1-14 14h-36l-15 12v-12h-28a14 14 0 0 1-14-14v-15a14 14 0 0 1 14-14z" fill="#E7F5EF" />
        <path d="M309 139h44" stroke="#4C9A7C" strokeWidth="5" strokeLinecap="round" />
      </g>
    )
  }

  if (kind === 'conflict') {
    return (
      <g>
        <Person x={75} y={78} color="#F4B28F" shirt="#6558D6" scale={.72} />
        <Person x={274} y={78} color="#C98968" shirt="#55A28D" scale={.72} />
        <path d="M51 47h91a14 14 0 0 1 14 14v19a14 14 0 0 1-14 14h-42l-16 12V94H51a14 14 0 0 1-14-14V61a14 14 0 0 1 14-14z" fill="#fff" stroke="#6558D6" strokeWidth="3" />
        <path d="M264 36h92a14 14 0 0 1 14 14v20a14 14 0 0 1-14 14h-34l-17 12V84h-41a14 14 0 0 1-14-14V50a14 14 0 0 1 14-14z" fill="#EAF7F4" stroke="#55A28D" strokeWidth="3" />
        <path d="M174 132h66" stroke="#B8B6C8" strokeWidth="5" strokeDasharray="7 8" strokeLinecap="round" />
        <circle cx="207" cy="132" r="14" fill="#F1F0F6" /><path d="m201 132 5 5 8-10" fill="none" stroke="#67687E" strokeWidth="3" strokeLinecap="round" />
      </g>
    )
  }

  if (kind === 'consent') {
    return (
      <g>
        <Person x={84} y={78} color="#D99C7A" shirt="#E99B54" scale={.72} />
        <Person x={265} y={78} color="#F4B28F" shirt="#6255D8" scale={.72} />
        <circle cx="207" cy="81" r="42" fill="#E9F6EF" />
        <path d="M187 81q18-21 39 0-19 21-39 0z" fill="#fff" stroke="#3C9874" strokeWidth="4" />
        <circle cx="207" cy="81" r="8" fill="#3C9874" />
        <path d="M131 50q17-20 33 0" fill="none" stroke="#E8A144" strokeWidth="5" strokeLinecap="round" />
        <path d="M249 50q17-20 33 0" fill="none" stroke="#E8A144" strokeWidth="5" strokeLinecap="round" />
        <path d="M188 145h39" stroke="#3C9874" strokeWidth="5" strokeLinecap="round" />
      </g>
    )
  }

  if (kind === 'repeated') {
    return (
      <g>
        <Person x={40} y={81} color="#E9B493" shirt="#6255D8" scale={.68} />
        <Phone x={153} y={32} alert />
        <circle cx="313" cy="55" r="25" fill="#FFF0DA" /><path d="M313 42v15" stroke="#D68B33" strokeWidth="5" strokeLinecap="round" /><circle cx="313" cy="66" r="2.8" fill="#D68B33" />
        <circle cx="324" cy="100" r="21" fill="#E9E6FF" /><path d="M314 100h20M324 90v20" stroke="#6558D6" strokeWidth="4" strokeLinecap="round" />
        <path d="M51 56q22-22 43 0" fill="none" stroke="#E66C78" strokeWidth="4" strokeDasharray="5 5" />
      </g>
    )
  }

  if (kind === 'ines') {
    return (
      <g>
        <circle cx="100" cy="110" r="67" fill="#F3EFFF" />
        <Person x={65} y={66} color="#C98968" shirt="#6255D8" scale={.98} />
        <Phone x={229} y={30} alert />
        <circle cx="322" cy="39" r="16" fill="#E66C78" /><path d="M322 31v9" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><circle cx="322" cy="45" r="1.5" fill="#fff" />
        <path d="M37 48q13-20 28-4" fill="none" stroke="#55A28D" strokeWidth="5" strokeLinecap="round" />
        <path d="M41 43l4-1-1 5" fill="#55A28D" />
      </g>
    )
  }

  if (kind === 'summary') {
    return (
      <g>
        <rect x="60" y="39" width="128" height="70" rx="17" fill="#EEEAFE" />
        <rect x="204" y="39" width="128" height="70" rx="17" fill="#EAF7F4" />
        <rect x="60" y="125" width="128" height="70" rx="17" fill="#FFF3DF" />
        <rect x="204" y="125" width="128" height="70" rx="17" fill="#FCEBF0" />
        <path d="M90 73a21 21 0 1 1 6 15" fill="none" stroke="#6558D6" strokeWidth="6" strokeLinecap="round" /><path d="m89 81 7 8 2-10" fill="#6558D6" />
        <path d="m247 76 11 11 24-28" fill="none" stroke="#3C9874" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="125" cy="160" r="17" fill="#E8A144" /><path d="M116 160h18" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <path d="M245 168q18-21 36 0-18 19-36 0z" fill="#E66C78" /><path d="M258 154c-12-12-24 5-13 14" fill="#E66C78" />
      </g>
    )
  }

  return (
    <g>
      <circle cx="95" cy="169" r="46" fill="#F1EFFF" />
      <circle cx="323" cy="63" r="42" fill="#E9F6F1" />
      <Person x={72} y={83} color="#E9B493" shirt="#6558D6" scale={.8} />
      <Person x={181} y={76} color="#C98968" shirt="#E99B54" scale={.85} />
      <Person x={284} y={83} color="#F4B28F" shirt="#55A28D" scale={.8} />
      <Phone x={155} y={28} />
      <path d="M60 59h58a12 12 0 0 1 12 12v13a12 12 0 0 1-12 12H90l-14 10V96H60a12 12 0 0 1-12-12V71a12 12 0 0 1 12-12z" fill="#fff" stroke="#6558D6" strokeWidth="3" />
      <circle cx="72" cy="78" r="3" fill="#6558D6" /><circle cx="84" cy="78" r="3" fill="#6558D6" /><circle cx="96" cy="78" r="3" fill="#6558D6" />
    </g>
  )
}

export default function SceneIllustration({ kind = 'welcome', compact = false }) {
  return (
    <svg
      className={`scene-illustration ${compact ? 'scene-compact' : ''}`}
      viewBox="0 0 420 230"
      role="img"
      aria-label={labels[kind] ?? 'Illustration de la capsule'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="412" height="222" rx="28" fill="#F2F0FF" />
      <circle cx="31" cy="37" r="9" fill="#F3BD69" />
      <circle cx="385" cy="194" r="12" fill="#D8EDE7" />
      <IllustrationContent kind={kind} />
    </svg>
  )
}
