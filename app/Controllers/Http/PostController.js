'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  async getPosts({request, response}) {
        let posts = await Post.query().with('user').fetch()

        return response.json(posts)
      }

  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    try {
          // if (await auth.check()) {
          let post = await auth.user.posts().create(request.all())
          await post.load('user');
          return response.json(post)
          // }

        } catch (e) {
          console.log(e)
          return response.json({message: 'You are not authorized to perform this action'})
        }

  }
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, auth, response }) {
    let post = await Post.find(params.id)
        post.title = request.input('title')
        post.description = request.input('description');

        await post.save()
        await post.load('user');

        return response.json(post)
  }
  async delete ({ params, request, response }) {
    await Post.find(params.id).delete()

        return response.json({message: 'Post has been deleted'})
  }
}

module.exports = PostController
