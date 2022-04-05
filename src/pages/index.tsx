import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { Button } from '@/components/atoms/Button'
import { InputGroup } from '@/components/molecules/InputGroup'
import { SampleForm } from '@/components/organisms/SampleForm'
import Layout from '@/components/templates/Layout'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home Page" />
      <Layout>
        <section className="container px-3 mx-auto max-w-5xl">
          <div className="py-12 border-b">
            <h2 className="mb-6 text-2xl font-bold">Atoms</h2>
            <Button
              label="Button"
              buttonProps={{
                type: 'button',
              }}
            />
          </div>
          <div className="bottom-1 py-12 border-b">
            <h2 className="mb-6 text-2xl font-bold">Molecules</h2>
            <InputGroup
              title="Email"
              labelProps={{
                htmlFor: 'email',
              }}
              inputPorps={{
                id: 'email',
                name: 'email',
                placeholder: 'info@example.com',
              }}
            />
          </div>
          <div className="bottom-1 py-12">
            <h2 className="mb-6 text-2xl font-bold">Organisms</h2>
            <SampleForm />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home
