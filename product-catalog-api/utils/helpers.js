import mongoose from 'mongoose';

export const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const sanitizeString = (value) =>
  typeof value === 'string' ? value.trim() : value;

export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export const createError = (message, statusCode = 400) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

export const buildSearchFilter = (query, searchableFields = []) => {
  const { search } = query;

  if (!search || searchableFields.length === 0) return {};

  const regex = new RegExp(search, 'i');

  const orConditions = searchableFields.map((field) => ({
    [field]: { $regex: regex },
  }));

  return { $or: orConditions };
};

export const getPagination = (query) => {
  const page = Math.max(1, parseInt(query.page)) || 1;
  const limit = Math.max(1, parseInt(query.limit)) || 10;
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};
