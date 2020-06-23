'use strict'

import fui from '@emphori/fui/lib/shared/html.js'

const wrapper = fui.div.styles({
  height: '100%'
})

const container = fui.div.styles({
  width: '90%',
  margin: 'auto',
  padding: '30px 0'
})

const headerContainer = container.styles({
  borderBottom: '1px solid rgb(212, 212, 212, 0.3)',
})

const headerTitle = fui.span.lift(({ title }) =>
  fui.h3.text(title).styles({
    display: 'inline-block',
    margin: 0,
    padding: 0
  })
)

const headerLinks = fui.ul.styles({
  display: 'inline-block',
  listStyle: 'none',
  margin: 0,
  padding: 0
})

const headerAnchor = fui.span.lift(({ text, href }) =>
  fui.a
    .attr('href', href)
    .attr('target', '_blank')
    .text(text)
    .styles({
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color 320ms ease',
    })
)

const headerLink = fui.li.styles({
  display: 'inline-block',
  marginLeft: '28px',
  color: 'var(--secondary-color)',
  ':hover': {
    color: 'var(--primary-color)'
  }
}).add(headerAnchor)

const headerContact = headerAnchor.styles({
  float: 'right',
  color: 'var(--primary-color)',
  fontWeight: 500,
  ' a:after': {
    content: "'👋'",
    fontSize: '1.28em',
    lineHeight: '1',
    marginLeft: '7px',
    display: 'inline-block'
  },
  ' a:hover:after': {
    animation: 'wave-animation 1300ms cubic-bezier(0.66, 0.19, 0.46, 0.87)',
    transformOrigin: '70% 70%'
  }
})

const mainContainer = container

const pageSummary = fui.section.lift(({ summary }) =>
  fui.p.text(summary).styles({
    fontSize: '3em',
    fontWeight: '700',
    maxWidth: '820px'
  })
)

const main = wrapper
  .add(fui.header.add(headerContainer
    .add(headerTitle)
    .add(headerLinks
      .add(headerLink.scope(() => ({ text: 'GitHub ↗', href: 'https://github.com/emphori' })))
      .add(headerLink.scope(() => ({ text: 'Twitter ↗', href: 'https://twitter.com/emphori' })))
    )
    .add(headerContact.scope(() => ({ text: 'Say hello', href: 'mailto:info@emphori.co' })))
  ))
  .add(fui.main.add(mainContainer
    .add(pageSummary)
  ))

document.body.appendChild(main({
  title: 'Emphori',
  summary: 'We\'re a self-funded collective, building and maintaining open source libraries for the V8 runtime and the web.'
}))
