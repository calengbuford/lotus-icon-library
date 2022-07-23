import React from 'react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { sort: 'alpha' },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Customization', 'Theming', 'Releases'],
    },
  },
}

// hack for .mdx backgrounds and layout to work on Docs page (https://github.com/storybookjs/storybook/issues/13323)
export const decorators = [
  (Story, context) => {
    const defaultBackgroundColorKey = context?.parameters?.backgrounds?.default
    const defaultBackgroundColor = context?.parameters?.backgrounds?.values?.find(
      (v) => v.name === defaultBackgroundColorKey,
    )?.value
    const currentBackgroundColor = context?.globals?.backgrounds?.value ?? defaultBackgroundColor

    const styleContent = `.docs-story {
      background-color: ${currentBackgroundColor};
      transition: background-color 0.3s;
    }
    .docs-story > div {
      display: flex;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
    }`

    return (
      <>
        <style>{styleContent}</style>
        <>{Story(context)}</>
      </>
    )
  },
]