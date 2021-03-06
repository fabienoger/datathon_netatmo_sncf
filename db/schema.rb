# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"
  enable_extension "unaccent"

# Could not dump table "device" because of following StandardError
#   Unknown type 'public.geometry(PointZ,4326)' for column 'geom'

# Could not dump table "device_close" because of following StandardError
#   Unknown type 'public.geometry(PointZ,4326)' for column 'geom'

# Could not dump table "ref_geo" because of following StandardError
#   Unknown type 'public.geometry(Point,2154)' for column 'geom'

  create_table "rex_incidents_banalis_import", id: false, force: :cascade do |t|
    t.string "id_io"
    t.string "num_incident_io"
    t.string "date_io_debut"
    t.string "date_io_fin"
    t.string "annee"
    t.string "filtre_vf"
    t.string "mois"
    t.string "semaine"
    t.string "jour"
    t.string "io_type_incident"
    t.string "io_type_defaillance"
    t.string "io_type_ressource_defaillante"
    t.string "io_libelle_ressource"
    t.string "io_structure_responsable"
    t.string "io_commentaires_1"
    t.string "io_commentaires_2"
    t.string "io_lieu"
    t.string "io_libelle_pr_debut"
    t.string "io_region_pr_debut"
    t.string "io_even_pr_debut"
    t.string "io_libelle_pr_pr_fin"
    t.string "io_secteur_pr_debut"
    t.string "io_secteur_pr_fin"
    t.string "troncon"
    t.string "secteur_troncon"
    t.string "densite"
    t.string "trains_touches"
    t.string "minutes_perdues"
    t.string "trains_supprimes"
    t.string "transilien_touches"
    t.string "minutes_perdues_transilien"
    t.string "transilien_supprimes"
    t.string "voyageurs_transilien_retardes"
    t.string "future_macro_catégorie"
    t.string "future_famille"
    t.string "code_vendome"
    t.string "specialite_infra_v"
    t.string "spécialite_détaillée_infra_v"
    t.string "cause_infra_v"
    t.string "etablissement_responsable"
    t.string "ventilation"
    t.string "ventilation_détaillee"
    t.string "indicateur_giu"
    t.string "empty_1"
    t.string "empty_2"
    t.string "ci_associé"
    t.string "empty_3"
    t.string "empty_4"
    t.string "empty_5"
    t.string "ligne"
    t.string "pk"
  end

  create_table "rex_sig_banalis_import", id: false, force: :cascade do |t|
    t.string "fnofich"
    t.string "libel"
    t.string "fdtfich"
    t.string "fhfich"
    t.string "fdesgeo"
    t.string "fcdgeo"
    t.string "flig"
    t.string "fclig"
    t.string "fcrit"
    t.string "ftyelec"
    t.string "fanelec"
    t.string "fdesloca"
    t.string "fcdlocageo"
    t.string "fkm"
    t.string "fvoie"
    t.string "fsens"
    t.string "fincid"
    t.string "fcdsys"
    t.string "fdescond"
    t.string "fdesnat"
    t.string "fdtincid"
    t.string "fhincid"
    t.string "fdtappel"
    t.string "fhappel"
    t.string "dappel"
    t.string "fdtarr"
    t.string "fharr"
    t.string "dach"
    t.string "fdtdbt"
    t.string "fhdbt"
    t.string "datt"
    t.string "fdtrms"
    t.string "fhrms"
    t.string "drem"
    t.string "fdtrsn"
    t.string "fhrsn"
    t.string "drep"
    t.string "fdtrepg"
    t.string "fhrepg"
    t.string "fdjsndjs"
    t.string "fdiff"
    t.string "fexpl"
    t.string "fmoyenintv"
    t.string "fnatinst"
    t.string "fdesinst"
    t.string "fcdsurv"
    t.string "fsymb"
    t.string "fdessy"
    t.string "fcdmat"
    t.string "fdesmat"
    t.string "fdesmat1"
    t.string "fconst"
    t.string "fltserie"
    t.string "fno"
    t.string "fdtfab"
    t.string "fdtrev"
    t.string "fdtms"
    t.string "fnbrmat"
    t.string "fcauserp"
    t.string "fdescause"
    t.string "fdescaus1"
    t.string "fdcirc"
    t.string "fcdcause"
    t.string "ffacthum"
    t.string "frapcomp"
    t.string "ftemp"
    t.string "fmeteo"
    t.string "frepcirc"
    t.string "fnbrrap"
    t.string "fnbraut"
    t.string "fnbrmes"
    t.string "fnbrbl"
    t.string "fnbrter"
    t.string "fnbrtir"
    t.string "fpdtrap"
    t.string "fpdtaut"
    t.string "fpdtmes"
    t.string "fpdtbl"
    t.string "fpdtter"
    t.string "fpdttir"
    t.string "fimpgl"
    t.string "fimpaut"
    t.string "fimpfr"
    t.string "fimpbl"
    t.string "fimpter"
    t.string "fimptir"
    t.string "fsupgl"
    t.string "fsupaut"
    t.string "fsupfr"
    t.string "fsupbl"
    t.string "fsupter"
    t.string "fsuptir"
    t.string "fnatintv"
    t.string "fdtintv"
    t.string "fdesrepa"
    t.string "fobs"
    t.string "fnota"
    t.string "fkart"
    t.string "fdtvaletb"
    t.string "fdtvalreg"
    t.string "fntrain"
    t.string "fnengin"
    t.string "fnuenreg"
    t.string "accord_brehat"
    t.string "accord_brehat_obs"
    t.string "code_region"
    t.string "code_region_3_car"
    t.string "code_up"
    t.string "code_brehat"
    t.string "contact_nom"
    t.string "contact_telephone"
    t.string "fiche_modifiee_direction"
    t.string "fiche_proposee_up"
    t.string "fiche_supprimee"
    t.string "fiche_validee_up"
    t.string "periodicite"
    t.string "fh_procedure"
    t.string "fh_environnement"
    t.string "fh_homme"
    t.string "fh_organisation"
    t.string "lgv"
    t.string "trafic_transilien"
    t.string "signal"
    t.string "fiche_modifiee_ig"
    t.string "confirmee_sq3"
    t.string "secteur_dpx_code"
    t.string "secteur_dpx_libell"
    t.string "vue_ig_le"
    t.string "indispo"
    t.string "etab_code"
    t.string "etab_libell"
    t.string "tp"
    t.string "ligne"
    t.string "voie"
    t.string "pk"
    t.string "modele_crt"
    t.string "modele_long"
    t.string "designation"
  end

# Could not dump table "temperature" because of following StandardError
#   Unknown type 'public.geometry(Point,2154)' for column 'geom'

end
