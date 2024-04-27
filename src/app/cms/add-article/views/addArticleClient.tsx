'use client'

import React from 'react'
import { useForm } from '@tanstack/react-form'
import type { FieldApi } from '@tanstack/react-form'

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em>{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

const AddArticleClient = () => {
  const form = useForm({
    defaultValues: {
      articleName: '',
      articleCategory: '',
      articleDescription: '',
      articleBody: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

  return (
    <div className="flex justify-center">
      <form
        className="w-1/2"
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div className="flex flex-col my-6">
          <form.Field
            name="articleName"
            validators={{
              onChange: ({ value }) =>
                !value ? 'An article name is required' : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return (
                  value.includes('error') &&
                  'No "error" allowed in article name'
                )
              },
            }}
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Article Name</label>
                  <input
                    className="p-2 bg-slate-800"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )
            }}
          />
        </div>
        <div className="flex flex-col my-6">
          <form.Field
            name="articleCategory"
            validators={{
              onChange: ({ value }) =>
                !value ? 'An article category is required' : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return (
                  value.includes('error') &&
                  'No "error" allowed in article category'
                )
              },
            }}
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Article Category</label>
                  <input
                    className="p-2 bg-slate-800"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )
            }}
          />
        </div>
        <div className="flex flex-col my-6">
          <form.Field
            name="articleDescription"
            validators={{
              onChange: ({ value }) =>
                !value ? 'An article description is required' : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return (
                  value.includes('error') &&
                  'No "error" allowed in article description'
                )
              },
            }}
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Article Description</label>
                  <input
                    className="p-2 bg-slate-800"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )
            }}
          />
        </div>
        <div className="flex flex-col my-6">
          <form.Field
            name="articleBody"
            validators={{
              onChange: ({ value }) =>
                !value ? 'An article body is required' : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                return (
                  value.includes('error') &&
                  'No "error" allowed in article body'
                )
              },
            }}
            children={(field) => {
              return (
                <>
                  <label htmlFor={field.name}>Article Body</label>
                  <textarea
                    className="p-2 bg-slate-800"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    rows={20}
                  />
                  <FieldInfo field={field} />
                </>
              )
            }}
          />
        </div>
        <div className="flex my-6">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button
                className="p-2 bg-cyan-400 w-full cursor-pointer"
                type="submit"
                disabled={!canSubmit}
              >
                {isSubmitting ? '...' : 'Submit'}
              </button>
            )}
          />
        </div>
      </form>
    </div>
  )
}

export default AddArticleClient
