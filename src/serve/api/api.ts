import asker from '..'

function chat(prompt: string) {
  return asker.post({ url: 'claude/chat', data: { prompt }, headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
}

export { chat }
