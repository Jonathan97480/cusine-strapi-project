'use strict';

/**
 *  recipe controller
 */

const { createCoreController }=require('@strapi/strapi').factories;

/* module.exports=createCoreController('api::recipe.recipe'); */

module.exports=createCoreController('api::recipe.recipe', ({ strapi }) => ({
  async find(ctx) {
    const { query }=ctx;

    const entity=await strapi.entityService.findMany('api::recipe.recipe', {
      ...query,
      populate: {

        miniature: true,
        ingredient: {
          populate: {
            thundail_ingredient: {
              populate: {
                url: true
              }
            }
          }
        },
        stape: {
          populate: {
            thundail: true
          }
        },
        info: {
          populate: {
            cooking: {
              populate: {}
            }
          }
        }


      },
    });
    const sanitizedEntity=await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);

  }
}));
