
export default callback => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (error) {
    const errorCode = error.kind === 'ObjectId' ? 404 : error.statusCode || 500;
    const message = errorCode === 500 ? `something went wrong - ${error.message}` : err.message;
    return res.status(errorCode).send({
      status: errorCode,
      message
    });
  }
};
