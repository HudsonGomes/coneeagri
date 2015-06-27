class DropTableTableUsers < ActiveRecord::Migration
  def change
    drop_table :table_users
    drop_table :comfy_cms_sites
    drop_table :comfy_cms_layouts
    drop_table :comfy_cms_pages
    drop_table :comfy_cms_blocks
    drop_table :comfy_cms_snippets
    drop_table :comfy_cms_files
    drop_table :comfy_cms_revisions
    drop_table :comfy_cms_categories
    drop_table :comfy_cms_categorizations
  end
end
